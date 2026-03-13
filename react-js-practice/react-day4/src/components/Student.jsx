//function Student(props)
function Student({name, course, roll})


{
    return (
        <div>
           {/* <h1>{props.name} </h1>
            <h1>{props.rollno} </h1>
            <h1>{props.course} </h1> */}
            <hr />
            <h2>Student Name : {name}</h2>
            <h2>Course Name : {course}</h2>
            <h2>Roll Number : {roll}</h2>

            <p>This is our student page</p>
        </div>
        
    )
}
export default Student
