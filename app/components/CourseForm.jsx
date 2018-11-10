import React from 'react'
// import { withModal, Loader } from '../components'
import { Form, FormGroup, ControlLabel, FormControl, Checkbox, 
         Button, Glyphicon, InputGroup, ButtonToolbar } from 'react-bootstrap'
import DataComponent from '../datacomponents/DataComponent'
import Config from '../conf.json'
import Loader from '../components'
import '../app.css'

import { Post, Put } from '../datacomponents/SaveData'


const textareaLimit = {
    resize: 'vertical'
}

class CourseForm extends React.Component {
    courseDef = {
            id: undefined,
            title: '',
            imagePath: '',
            price: {
                  normal: 0,
                  early_bird: 0
            },
            dates: {
                start_date: '',
                end_date: ''
            },
            duration: '',
            open: false,
            instructors: [],
            description: ''
        }
    

    constructor(props) {
        super(props)
        this.state = {
            course: this.props.course || this.courseDef,
            isNew: this.props.isNew            
        }
    }

    componentDidMount() {
        this.state.course.instructors.map(i => this.instructorsChecks.add(i))
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        let newCourse = this.state.course
        switch (name){
            case 'open':
                newCourse[name] = e.target.checked
                break
            case 'price.early_bid':
                newCourse.price.early_bird = Number(value)
                break
            case 'price.normal':
                newCourse.price.normal = Number(value)
                break
            case 'dates.start_date':
                newCourse.dates.start_date = value
                break
            case 'dates.end_date':
                newCourse.dates.end_date = value
                break
            default:
                newCourse[name] = value
        }

        this.setState({course: newCourse, isNew: this.state.isNew})
    }

    submitForm = async (e) => {
        e.preventDefault()
        try {
            if (this.state.course.id)
                await Put(Config.CoursesEndpoint, this.state.course.id, this.state.course)
            else
                await Post(`${Config.CoursesEndpoint}`, this.state.course)
        } catch (e) {
            alert('Something went wrong')
            return
        }

        this.props.handleClose()
    }

    componentWillMount() {
        this.instructorsChecks = new Set()
    }

    toggleInstrCheckBox = label => {
        if (this.instructorsChecks.has(label))
            this.instructorsChecks.delete(label)
        else
            this.instructorsChecks.add(label)

        let newCourse = this.state.course
        newCourse.instructors = [...this.instructorsChecks]
        this.setState({course: newCourse})
    }


    render() {
        const _course = this.state.course
        console.log(_course)
        return ( <div>
            <Form onSubmit={this.submitForm}>
                <FieldInputGroup controlId='formTitle'
                            label='Title'
                            type='text'
                            value={_course.title}
                            glyph='text-color'
                            name='title'
                            onChange={this.handleUserInput} />

                <FieldInputGroup controlId='formDuration'
                            label='Duration'
                            type='text'
                            glyph='time'
                            value={_course.duration}
                            onChange={this.handleUserInput}
                            name='duration' />

                <FieldInputGroup controlId='formImagePath'
                            label='Image path'
                            type='text'
                            value={_course.imagePath}
                            glyph='picture'
                            name='imagePath'
                            onChange={this.handleUserInput} />
                
                <FormGroup controlId='formBookable'>
                    <ControlLabel><Glyphicon glyph='glyphicon glyphicon-briefcase' /> Bookable</ControlLabel>
                    <Checkbox name='open' onChange={this.handleUserInput} checked={_course.open}>Bookable</Checkbox>
                </FormGroup>

                <FormGroup controlId='formInstructors'>
                    <ControlLabel><Glyphicon glyph='glyphicon glyphicon-education' /> Instructors</ControlLabel>
                    <DataComponent endpoint={Config.IntstructorsEndpoint}>
                    {
                        (data, isLoading) => (
                            data.map(instructor => (
                                <Checkbox   key={instructor.id} label={instructor.id} 
                                            value={instructor.id} onChange={() => this.toggleInstrCheckBox(instructor.id)}
                                            checked={this.instructorsChecks.has(instructor.id)}>
                                {
                                     `${instructor.name.first} ${instructor.name.last}`
                                 }
                                 </Checkbox>
                             ))
                        )
                        
                    }
                    </DataComponent>
                </FormGroup>

                
                <FieldInputGroup controlId='formDescription'
                            label='Description'
                            componentClass = 'textarea'
                            controlStyle = {textareaLimit}
                            glyph = 'book'
                            name = 'description'
                            value={_course.description}
                            onChange={this.handleUserInput} />

                <h4><Glyphicon glyph='glyphicon glyphicon-calendar' /> Dates</h4>
                <FieldInputGroup controlId='formStartDate'
                            label='Start date'
                            type='text'
                            name='dates.start_date'
                            value={_course.dates.start_date}
                            onChange={this.handleUserInput} />
                
                <FieldInputGroup controlId='formEndDate'
                            label='End date'
                            type='text'
                            name='dates.end_date'
                            value={_course.dates.end_date}
                            onChange={this.handleUserInput} />
                <h4><Glyphicon glyph='glyphicon glyphicon-euro' /> Price</h4>

                <FieldInputGroup controlId='formPriceEarly'
                                    label='Early bid'
                                    type='number'
                                    value={_course.price.early_bird}
                                    name='price.early_bid'
                                    inputgroupAddon={<Glyphicon glyph='glyphicon glyphicon-euro' />}
                                    onChange={this.handleUserInput} />
                
                <FieldInputGroup controlId='formPriceNormal'
                                    label='Normal'
                                    type='number'
                                    value={_course.price.normal}
                                    name='price.normal'
                                    inputgroupAddon={<Glyphicon glyph='glyphicon glyphicon-euro' />}
                                    onChange={this.handleUserInput} />

                
                <ButtonToolbar>
                    <Button bsStyle="success" type='submit' >Save Changes</Button>
                    <Button onClick={this.props.handleClose}>Close</Button>
                </ButtonToolbar>
                
            </Form>
            
            
            </div>
        )
    }
}

const FieldInputGroup = ({controlId, label, type, componentClass, controlStyle, value, glyph, name, inputgroupAddon, onChange}) => {
    return (
        <FormGroup controlId={controlId}>
            {glyph ? <Glyphicon glyph={`glyphicon glyphicon-${glyph}`} /> : ''}&nbsp;
            <ControlLabel>{label}</ControlLabel>
            {
                (inputgroupAddon)
                ? <InputGroup>
                    { componentClass 
                        ? <FormControl componentClass={componentClass} style={controlStyle} placeholder={label} value={value} name={name} onChange={onChange} />
                        : <FormControl type={type ? type : ''} placeholder={label} style={controlStyle} value={value} name={name} onChange={onChange} /> 
                    }                    
                    <InputGroup.Addon>{inputgroupAddon}</InputGroup.Addon>
                  </InputGroup>
                : componentClass 
                    ? <FormControl componentClass={componentClass} style={controlStyle} placeholder={label} value={value} name={name} onChange={onChange} />
                    : <FormControl type={type ? type : ''} style={controlStyle} placeholder={label} value={value} name={name} onChange={onChange} />
            }
        </FormGroup>
    )
}

const addGlyph = (label, glyph) => (
    <>
        <Glyphicon glyph={`glyphicon glyphicon-${glyph}`} /> {label}
    </>
)

export default CourseForm