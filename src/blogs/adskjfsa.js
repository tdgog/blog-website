import { BlogPage, CodeBlock, Contents, Image } from "../components/Blog"

export const config = {
    name: 'Test Blog',
    preview: 'lemon',
    category: 'javascript',
    tags: ['programming']
}

export default function Page() {
    const code = `const emon = () => console.log(arguments);
const lemon = 'lemon'
[...lemon].forEach(l => emon(l))`

    return <div className='p-5'>
        <BlogPage config={config}>
            <h1>Lemons</h1>
            <Image alt='header image' src='https://www.onegreenplanet.org/wp-content/uploads/2018/04/lemon-health.jpg' />
            <Contents />
            <hr />
            <h2>Why I like lemons</h2>
            <ul>
                <li>l</li>
                <li>e</li>
                <li>m</li>
                <li>o</li>
                <li>n</li>
            </ul>
            <h2>What does a lemon look like?</h2>
            <Image border alt='lem' src='https://static.vecteezy.com/system/resources/previews/008/848/358/original/fresh-lemon-fruit-free-png.png' />
            <h2>How code lemon?</h2>
            <CodeBlock language='js' code={code} />
            <h2>What if lemon is very small?</h2>
            <p className='text-xs'>lemon</p>
            <h2>Help my lemon is corrupted</h2>
            <p>l̶̛̛̮̗͉̰̖̦̗̜͓̯̘̹̥̘̠͉̤͇̟̮̬̙̝̒̈̔̅̆͛͊̉̇̏̄̈́̿̔͋̋̈́̊̓̉̈́̈́̈́̓͆̐͌̕͘̕͠ͅȩ̴̨̨̨̹̬̻͍̰̤̠̤̪̘͙͓͙̱̰̰̟͇̹̰̪̜͎̮͚̳̺͉̅̇͊̍̎͋͐̃̀̓̓̏̎̋̓͐́̓̓̕͜͠͝ͅͅm̴̡͕̣̻̥̱͎̩̝̣͚͔̬̜̬̟̼̹̭̭̻͚͉͚͈͎̩̰͂͋̑͂̎̀̄͂̒̓̐́̐͋̑̉̒͆̿͐̈͜͜͝͝ͅo̶̧̢̹̲̬̝͖̮̺̳͚̩͔͕̫̤̪͍̳̤̭͓̤̫͕͇͙͓̳̤̳̙̭̥͛̈́̄̉̑͗̐̿̀̑̋͑̕͘n̸̡̜͇̳̿͊̆́͋͗̀͑́͝ ̸̧̢̨̙̤̗̰͖̺͎̰̟̫̲̤̳̥̬͚̬͉̞̼̬̮̊̆͒͊̏͊̒̂͒͛̋̄̔͒͆̆͋́̚͜͝͝ẘ̸̢̦̹͔̖͈͈̯̯͔͉̟̫͎͎͚͚̞̄͐̋̑̔̓̓̇͆̑̐́̈́̋̑̐̽̑͛͛̋̿̾̾͐͆͘̕̚i̸̡̺̻̙͔̿̔̽̽͋͂̂̉̑̏̈́̉̏̓͋̇̇̊̈́͛͒͌̈́͛̔̿̋͘͝͝͠͠l̷̛̠̲̭͍̖̥̮̼̼͔̣̣͚̰͚̀͌́̓̿͗́̀͛̋̈́̂̽͊͂́͗̏͐͌̉͒̈́̑̓͋͒͌̈́̓͒̕̚͝ͅḷ̷̣̐͗̓̈̔̔̄̾̓̇̑̃͂̑͊̉̄̃̌̿̂̎̄̍̋͠ ̷̡̢̰͔̙͙͍̝͕̣̰̗̫̩̣̘̗̩͍͐ä̷̧̨̛̻͕͍̘̞̣̝̖̣̜̠̘̺̞̥̦̭̹̼͓̳̻͎͉̺͎̩̫͍̗̩̣́̍̀̒̔̑̀̋̂̉̍̈́́̿̿͛̇̋́̂̌̈́̉͂͝ͅͅḷ̵̡̡̧̻̰̖͈̣̮͚̠̼̭̳̙̻͚̩̘̳͎̝̞̺̥̗̣̹̗̗͓̦̗̮̤̺̪̹͊̂̈́͋̽̍̒̎͗͊w̷̡̛̛̠̖̘͙̹̬̣̳̟̦͕͉̬̠͓̹͙͍̮̼̱̑͌̿̄̀̾̆̍͛̾̍̇͆͠ͅȁ̸̢̘̭̰̤̮̺̺͇̟̟͒̀́́̍͗̍̍̆͂̎̿̽͊͘y̶̭̯͖͔̳͈̤̩͚̦̤̝̣̝͎̩̟͉͐͒̾̔̓̎̒̇̀̃̾̄̆̈́̐̀̇̏̅̈́͌̋̇̉̚̚̚͘̚͠ş̷̨̨̢̗͉̯̺̖̫̈̓̓̀̎͋͋̂̋́̂̔̏ ̶̡̨̦̙̱̮̥͍̼̓͗͐̽̆̿̃̍͒̆͌̍͑̚͝b̵̡̧̛̮̰̻̮̣̳̻̘͉̟͇̤̜͙͈͈͇̰̩̥͕̣̥̝̠͈̙͚̰̥͐̌̆̾̒̉͆̍͗̿͛͑̀̿͗̃̎̕̚͘ͅē̸̡̢̧͚̗̟͉͎͈̬̦̲͓̤̼̱̺͔̘̟̺͚̰̮͕͔̭̙̪͈̺͓̰̺͑̊̕̕̚͜͝͠ͅ ̴̢̻͉̥̖̗͎̳̳̦̥̲͎̭̣̾̆͐̾̍̅̈̈͌͊͂̄̂̽͐̆̉͝c̴̨̧̤̙̦̦̰̗̗̳͉̥͕̤̫̪͈͎̩͖̠͖̗͇̦̭̪̔̏̇̃̅̇́̿͊̉͊͜͜ơ̶̢̡̡̧̛̙̫͉̲̹̺̲̱̤̫̜̣̺͍̯̭͚̳̞̹̪̰̙͕̰̙̘̾̏̌̒̈́̇͑͗͐̂̍͛̍̾͒́́͑̀͋̊̆̅͒̊̋̓͌̈́̈͘͘̚͝͠͠ͅr̸̡̢̪͕̰̻̘̱͔̳̬̂́̿̀̑̍́̒̈̈͗̽̔́͑̌̑̂͑̊͘̚r̸̡̡̛͈̻̰̲̟̱̪̹̟̤̋̏̃̀͆̇͆͛̆̅͑̓̐̎̂̆̐͐͆̋̆͑͝͝͠͝͝ů̷̧̧̢͈̥͉͚̩̙̠̯͍̺̲̫̪̳̪̮̹̘͉̺͎̱͈̈́̑̂͜ͅp̴̡̧̛̬̺͈͓̫̪̘͔̣͔̘̩̮̣̩͍̩̣̠̲͙͇̳͓̑̄͋͒̋͑̿̒͛̆̋̚͝͠͝ͅt̶̖̻̅͆̌͋͐͐͗̉͐̑̎́͌̄̾̒̒͌̊̐̋͗̑͗͆̂͛͆̈̉́̏̚͠͠͝e̶̜̪̦͓̝̻̜̫̦̭̝͛d̸̢̢̧̛̤̪͕̠̦̺̩̤͍̭̭̯͕̺̯̄͌̆̓͋͒̽̏̈̓̃͋̂̀̔̿̐̌͘͜͝</p>
        </BlogPage>
    </div>
}
