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
                <caption>
                    Testing table
                    <p>The tests I will perform on the GibJohn solution</p>
                </caption>
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
                        <td>Alpha</td>
                        <td>Allows you to test that everything works together properly to create the leaderboard and store the data</td>
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
                </tbody>
            </table>
        </BlogPage>
    </div>
}
