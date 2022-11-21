import { BlogPage, Contents, Image } from "../components/Blog"
import headerimage from "../assets/images/logos/gibjohn_colourbg.png";

export const config = {
    name: 'Test Strategy',
    preview: 'Test strategy for GibJohn Tutoring',
    category: 't-level',
    tags: ['samstuff']
}

export default function Page() {
    return <div className='p-5'>
        <BlogPage config={config}>
            <h1>Test Strategy</h1>
            <Image alt='header image' src={headerimage} />
            <Contents />
            <hr />
            <h2>Test Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Module</th>
                        <th>Test Type</th>
                        <th>Justification</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Leaderboards</td>
                        <td>Black box</td>
                        <td>Allows you to test that everything works together properly to create the leaderboard and store the data</td>
                    </tr>
                    <tr>
                        <td>Leaderboards</td>
                        <td>Grey box</td>
                        <td>Allows you to test that it works with a large premade set of data before letting real users into it</td>
                    </tr>
                    <tr>
                        <td>Leaderboards</td>
                        <td>Beta</td>
                        <td>Allows you to test that it actually works when real users start to use it</td>
                    </tr>
                    <tr>
                        <td>Quiz</td>
                        <td>Alpha</td>
                        <td>Allows you to test that random questions are given each time and that the data is added to the database</td>
                    </tr>
                    <tr>
                        <td>Login</td>
                        <td>White Box</td>
                        <td>The source code should be visible and checked as the log in system needs to be very secure to prevent users passwords being stolen</td>
                    </tr>
                    <tr>
                        <td>Sign up</td>
                        <td>White Box</td>
                        <td>The source code should be visible and checked as the sign up system needs to be very secure to prevent users passwords being stolen</td>
                    </tr>
                    <tr>
                        <td>Error messages</td>
                        <td>Black box</td>
                        <td>I will put incorrect inputs into the login and sign up forms to ensure that they are properly regected</td>
                    </tr>
                    <tr>
                        <td>Navigation</td>
                        <td>Black box</td>
                        <td>I will try to navigate to each page from each page to check that the navbar takes users to the right page</td>
                    </tr>
                    <tr>
                        <td>Quiz</td>
                        <td>Grey box</td>
                        <td>Allows you to test that the correct questions show up for each quiz by already having access to the question sets while testing</td>
                    </tr>
                    <tr>
                        <td>Statistics</td>
                        <td>Grey box</td>
                        <td>Test that the correct percentages and other statistics display for a given dataset of user scores</td>
                    </tr>
                    <tr>
                        <td>Statistics</td>
                        <td>Alpha</td>
                        <td>Test that the displayed statistics update when you use the website and complete quizzes</td>
                    </tr>
                </tbody>
            </table>
        </BlogPage>
    </div>
}
