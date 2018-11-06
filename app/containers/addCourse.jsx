
import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/Header'
import BigText from '../components/BigText'

import { withModal, Loader } from '../components'
import { Form, FormGroup, ControlLabel, FormControl, Checkbox, Button, Glyphicon, InputGroup } from 'react-bootstrap'
import DataComponent from '../datacomponents/DataComponent'
import Config from '../conf.json'



// import CheckboxList from '../components/CheckboxList'

class AddCourse extends React.Component {
    state = {
        isNew: true,
        course: {
            id: -1,
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

    submitForm = (e) => {
        e.preventDefault()
        let newCourse = this.state.course
        newCourse.instructors = [...this.instructorsChecks]
        this.setState({course: newCourse, isNew: this.state.isNew})
        console.log(this.state.course)
    }

    componentWillMount() {
        this.instructorsChecks = new Set()
    }

    toggleInstrCheckBox = label => {
        if (this.instructorsChecks.has(label))
            this.instructorsChecks.delete(label)
        else
            this.instructorsChecks.add(label)
    }


    render() {
        const _course = this.state.course
        return ( <div>
            <Form onSubmit={this.props.mySubmit}>
                <FieldInputGroup controlId='formTitle'
                            label='Title'
                            type='text'
                            value={_course.title}
                            name='title'
                            onChange={this.handleUserInput} />

                <FieldInputGroup controlId='formDuration'
                            label='Duration'
                            type='text'
                            value={_course.duration}
                            onChange={this.handleUserInput}
                            name='duration' />

                <FieldInputGroup controlId='formImagePath'
                            label='Image path'
                            type='text'
                            value={_course.imagePath}
                            name='imagePath'
                            onChange={this.handleUserInput} />
                
                <FormGroup controlId='formBookable'>
                    <ControlLabel>Bookable</ControlLabel>
                    <Checkbox name='open' onChange={this.handleUserInput}>Bookable</Checkbox>
                </FormGroup>

                <FormGroup controlId='formInstructors'>
                    <ControlLabel>Instructors</ControlLabel>
                    <DataComponent endpoint={Config.IntstructorsEndpoint}>
                    {
                        (data, isLoading) => (
                            isLoading
                            ? <Loader />
                            : data.map(instructor => (
                                <Checkbox   key={instructor.id} label={instructor.id} 
                                            value={instructor.id} onChange={() => this.toggleInstrCheckBox(instructor.id)}>
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
                            type='textarea'
                            value={_course.description}
                            onChange={this.handleUserInput} />

                <h4>Dates</h4>
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
                <h4>Price</h4>

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

                

                {/* <Button type='submit'>Save</Button> */}
            </Form>
            <Button type='submit' onClick={()=>{}}>Save</Button>
            </div>
        )
    }
}

const FieldInputGroup = ({controlId, label, type, value, name, inputgroupAddon, onChange}) => {
    return (
        <FormGroup controlId={controlId}>
            <ControlLabel>{label}</ControlLabel>
            {
                (inputgroupAddon)
                ? <InputGroup>
                    <FormControl type={type} placeholder={label} value={value} name={name} onChange={onChange} />
                    <InputGroup.Addon>{inputgroupAddon}</InputGroup.Addon>
                  </InputGroup>
                : <FormControl type={type} placeholder={label} value={value} name={name} onChange={onChange} />
            }
        </FormGroup>
    )
}


export default withModal({title: 'Add Course'})(AddCourse);