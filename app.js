import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

async function getEngineers(){
    try {
        const response = await fetch('https://www.linkedin.com/search/results/people/?keywords=hardware%20engineer&origin=SWITCH_SEARCH_VERTICAL&sid=R%3B~')
        const body  =  await response.text();
        const $ = cheerio.load(body);
        const engineers = [];
        $('reusable-search__entity-result-list list-style-none').each(function(){engineers.push($(this).text())});
        console.log(engineers[0],engineers[1],engineers[2]);
    } catch (e) {console.log(e);}
}

getEngineers();