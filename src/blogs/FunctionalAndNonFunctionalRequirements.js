import { BlogPage, Contents, Image } from "../components/Blog"

export const config = {
    name: 'System Requirements',
    preview: 'Functional and non-functional project requirements',
    category: 't-level',
    tags: ['samstuff']
}

export default function Page() {
    return <div className='p-5'>
        <BlogPage category={config.category}>
            <h1>System Requirements</h1>
            <Image alt='header image' src='https://hsdc-cdn.s3.amazonaws.com/uploads/2019/12/T-Level-Landing-Page-Banner-v3.jpg' />
            <Contents />
            <hr />
            <h2>What is the project?</h2>
            <p>The system is an academic performance evaluator and analyser</p>
            <ul>
                <li>A website is most suitable for this website due to the amount and type of information required</li>
                <li>A basic version of the website will allow the user to make several rows and tables which contain:</li>
                <ul>
                    <li>The names of students</li>
                    <li>The names of subjects</li>
                    <li>Grades of tests, quizzes, and exams</li>
                </ul>
                <li>The program would then give the average grade of each subject, and compare it to other subjects and the classroom average</li>
                <li>The program should create graphs and tables of the students grades</li>
                <li>The program should notify the teacher if there is a possibility of the student failing the class</li>
                <li>Students grades should be compared across multiple terms</li>
            </ul>
            <h2>Functional Requirements</h2>
            <ul>
                <li>The program must be able to get the save the name of each students, all the subjects they study, and the grades in those subjects</li>
                <li>The program should be able to calculate the average grade for the class and compare individual students with this</li>
                <li>The program must be able to detect what grades are likely to result in failing the course based on past grades</li>
                <li>The program must continue to store data about students after the term has ended so that comparisons can be made cross-term</li>
                <li>The program will require a database and an API</li>
                <li>The program will require a device for it to be accessed on</li>
                <li>The program will require a server to host the website on</li>
            </ul>
            <h2>Non Functional Requirements</h2>
            <ul>
            <li>The website must be simple and easy to use</li>
            <li>The website must include accessibility features so that it can be used by teachers that may not be able to use the website in its default form (e.g., colour blindness or Irlen Syndrome)</li>
            <li>The website must conform to WCAG 2.2</li>
            <li>The website must work properly on all common screen sizes, including desktop and mobile</li>
            <li>Must work on all modern web browsers</li>
            <li>The data should be encrypted to ensure people's data cannot be stolen</li>
            </ul>
        </BlogPage>
    </div>
}
