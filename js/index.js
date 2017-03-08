/*Specify global vars, including
DOM objects(myPlot, summary,instructions,nav,chart),
arrays(summarytext,instructiontext),
and variables(step, lst,suggestiontext)
*/
var myPlot = document.getElementById('myDiv');
var instruction=d3.select("#instructions")
var instructiontext=["",
                      "( For more info: &nbsp;&nbsp;&nbsp;&nbsp;  Click the legend  &nbsp;&nbsp;&nbsp;&nbsp; |  &nbsp;&nbsp;&nbsp;&nbsp; Hover on Bar Chart  &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp; Click-Through Links)",
                      "( For more info: &nbsp;&nbsp;&nbsp;&nbsp;  Click the legend  &nbsp;&nbsp;&nbsp;&nbsp; |  &nbsp;&nbsp;&nbsp;&nbsp; Hover on Scatter Plot  &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp; Click-Through Links)",
                      "( For more info: &nbsp;&nbsp;&nbsp;&nbsp;  Click the legend  &nbsp;&nbsp;&nbsp;&nbsp; |  &nbsp;&nbsp;&nbsp;&nbsp; Hover on Bar Chart  &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp; Click-Through Links)",
                      "( For more info: &nbsp;&nbsp;&nbsp;&nbsp;  Click the legend  &nbsp;&nbsp;&nbsp;&nbsp; |  &nbsp;&nbsp;&nbsp;&nbsp; Hover on Bar Chart  &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp; Click-Through Links)",
                     ""];

var finding=d3.select("#findings")
findingtext=["Literature Reading Dilemma for Graduates",
             "Number of worldwide Alzheimer's Disease related publications climbs each year. But Comparing with non-clinical research articles which explode in quantity, number of clinical research articles remains relatively stable since 1997.",
             "Clear linear relationship is shown between journal impact factor and average citations per paper. Interestingly,  journals with more AD clinical papers published (i.e., higher ranking ), are more likely to have higher impact factor. ",
             "By sorting papers according to citations, milestone achievements jump out immediately.",
             "Latest breakthroughs and shift of trend are probed correctly by limiting search scope to papers published in last 5 years.",
             "Come back to the question, what can data do for graduate students?"];

var summary=d3.select("#details");
var summarytext=[
  "Young researchers often have difficulty in balancing the implementation of their own ideas and updating the knowledge of their field. As newbies in our field,  we quite often get lost in endless sea of  literature. Every day newly published papers flood in, each claiming a promising disease target or a potential therapy. <b>But how many of them are truly important ?</b><br>Very few. <br>Due to the extreme complexity of life, unfortunately, a conclusion that holds solid in cell experiments might not be applicable in vivo or to other cell types; a therapy turned successful in one species is likely to fail  in treating  a closely related species (e.g. mice and rats). But that's not to say we should unfollow the topic or unsubscribe journals. Literature is necessary to keep us updated with latest research articles. <br>Then, with very limited time we have as PhD trainees, how can we distinguish the milestone work from mediocre ones, and find the worthwhile piece of work to read? &nbsp;&nbsp;&nbsp;-This is where data analytics come to rescue. <br>I shall share my own experience of using data analytics to find impactful research articles and form ideas of <b>Alzheimer's Disease(AD)</b>.",
  " To begin with, I downloaded and processed all clinical articles published in last 4 decades on Alzheimer's Disease from PubMed. I am especially interested in clinical trials since they are most likely to produce treatments and cures in future. (Strongly recommend <b>PubMed</b> here. It is a great scource of data on life sciences which is open access to everyone and it even has a set of tools, <a href='https://www.ncbi.nlm.nih.gov/books/NBK25500/'>E-utilities</a>, to help users export data.)<br> In 2015, 46.8 million  people are diagnosed as AD patients, and this number is likely to double in 20 years. Thus the explosion of articles in this field is not a surprise to me.Interestingly, the clinical articles remain relatively constant since 1997. A likely guess is more and more small groups have become interested in AD and joined in, but most of them contribute only non-clinical research articles as the cost of clinical research is too enormous to afford.",
  "Top 10 journals are picked up based on how many clinical trials on AD are published on them. A scatter plot is then created based on impact factor (found online) and calculated average citations per paper of each journal. (Notably, only citations from PubMed searchable papers are counted, which underestimates the actual number, but this effect should not alter our conclusion.)<br>The 10 journals  take up almost half of the total citations of the 644 journals involved. An interesting finding is the positive corelation between ranking of total AD clinical papers and impact factor of the journal, such as <i>Neurology</i>, the journal with most AD clinical trials published, is also the most impactful one. This indicates AD clinical trials are more likely to attract citations than others.",
  "A simple sorting of these papers by citation numbers gives nice representation of milestone research. For example the most cited paper by <b>Rondolph C et al</b>,<i>The Repeatable Battery for the Assessment of Neuropsychological Status (RBANS): preliminary clinical validity.</i>, is a landmark research published in 1998 in designing a test instrument, RBANS , which can effectively detect and characterize dementia of different etiologies. <br>By reading through their abstracts of the most cited papers in chronological order, we can soon draw a path about how the topic was developed in the past half century. ",
  "Most of the time we care more about lastest important progress than classical but outdated ones. While old papers tend to outcompete new ones on citations due to natural priviledge. To select only lastest findings, we can simply apply a filter on the publish date. Then sort again by citations. And the produced results are pretty informative. <br>For example, the top 2 most cited papers, (<b>Doody RS et al</b>)<i>Phase 3 trials of solanezumab for mild-to-moderate Alzheimer's disease.</i> sponsored by pharmaceutical companies Eli Lily and  (<b>Salloway S et al</b>)<i>Two phase 3 trials of bapineuzumab in mild-to-moderate Alzheimer's disease.</i>  They are very meaningful work marking the failure of amyloid hypotheis, the most popular theory on explaining pathology of AD in last decade. \
<br>\
<br> <b>Amyloid Hypothesis</b> \
<br>The theory  postulated that extracellular amyloid beta (Aβ) deposits are the fundamental cause of the disease, which leads to a tempting speculation : targeted clearance of pathological deposits might stop or even cure alzheimer's disease. However, despite the effectiveness in deposit clearance, these antibodies turned to be bitter disappointment in failing to improve cognition or functional ability.   \
<br>\
<br> <b>New Trends</b> \
<br>The top 5 cited paper, 'Intranasal insulin therapy for Alzheimer disease and amnestic mild cognitive impairment: a pilot clinical trial.' , is the signal of one of the new trends, insulin therapy. In the beginning of 21 century, Intranasal insulin began attracting attention  small human studies reported improved cognition without a change in blood glucose or insulin levels in healthy volunteers. Later on some researchers found significant relevance between diabetes and AD, suggesting the relationship between AD and metabolism. \
<br>Although implausible, this theory is gaining popularity among scientists now. However it is unclear whether insulin therapy would perform well in longer trials. A new study on insulin therapy has been recruiting researchers since December 2016(NCT01767909). ",
  "Using Alzheimer's Disease(AD) as example, I shared my experience on how public accessible data  can be used in identifying trend, extracting important information, and spotting great research. Comparing with doing it manually,  it picks up important work without bias from individual researcher, and more importantly, saves great amount of time for graduate students who are keen to learn the environment of his/her research.<br><br><b>References:</b><br>1. Code and help<a href='https://github.com/gabrifc/Udacity-Data-Analyst-Nanodegree/blob/master/P6%20-%20Data%20Visualization'><p>  Inspiration from gabrifc's visualization,'Clay feet of giant'</p> <a><a href='https://plot.ly/javascript/ '><p>  Plotly.js, a very beginner-friendly graphing library</p><a><a href='http://www.w3schools.com/graphics/svg_intro.asp '><p>   W3school, for doubts and demos on html tags, javascript syntax, css style</p><a>2.Useful tools<a href='https://www.ncbi.nlm.nih.gov/pubmed'><p>  PubMed, the data source</p><a><a href='http://www.fredtrotter.com/2014/11/14/hacking-on-the-pubmed-api/'><p>  Fred's data scraping blog</p><a><a href='http://meyerweb.com/eric/tools/dencoder/'><p> URL request editor</p><a><a href='https://cran.r-project.org/web/packages/rentrez/vignettes/rentrez_tutorial.html'><p>  Rentrez, integrated R library for  PubMed data scraping</p><a>3.research articles and reports on AD<br>  Solanezumab:<a href='http://www.alzforum.org/therapeutics/solanezumab'><p>http://www.alzforum.org/therapeutics/solanezumab</p><a><a href='http://www.nature.com/news/how-to-defeat-dementia-1.20949'><p>http://www.nature.com/news/how-to-defeat-dementia-1.20949</p><a><a href='http://www.nature.com/nature/journal/v537/n7618/full/nature19323.html'><p>  Aducanumab</p><a><a href='http://onlinelibrary.wiley.com/doi/10.15252/emmm.201606210/full'><p>  2016 Mar review on 3 antibody drugs:solanezumab, crenezumab, Aducanumab</p><a>  Insulin therapy:<a href='http://www.alzforum.org/therapeutics/nasal-insulin'><p>http://www.alzforum.org/therapeutics/nasal-insulin</p><a><a href='https://www.ncbi.nlm.nih.gov/pubmed/12467491'><p>https://www.ncbi.nlm.nih.gov/pubmed/12467491</p><a><a href='https://clinicaltrials.gov/ct2/show/NCT01767909'<p>https://clinicaltrials.gov/ct2/show/NCT01767909</p><a>4. Others<a href='http://boomerhealthinstitute.com/the-preventive-prescription-for-alzheimers-exercise/'><p>  Initial page pic source</p><a><a href='http://www.theholisticingredient.com/blogs/wholesome-living/98921158-a-truly-holistic-9-week-healthy-lifestyle-program-im-happy-to-recommend'><p>  Background pic source</p><a><a href='http://www.alzheimers.net/2015-10-14/how-alzheimers-could-be-type-2-diabetes/'><p>  Life style suggestions for AD patients</p><a><a href='https://www.befunky.com/features/blur-image/'><p>  Befunky, online pic blurring tool</p><a> "];

var nav=d3.select(".next");
var chart=d3.selectAll("svg");
//var colors=["#DCDCDC","#D3D3D3","#C0C0C0","#A9A9A9","#808080","#696969","#778899","#708090","#2F4F4F","#000000"];

/*function to control visualization by CONTINUE button*/
var step=0;
intr();
function nextStep(){
  step++;
  if (step==6){
    step=0;
    intr();
  }else{
    viz(step);
  }
}

/*function to control visualization by vertical navigation bar*/
var lst;
function cngClass(obj){
  if (lst) lst.className="";
  obj.className="active";
  lst=obj
}

/*visualize the introduction page*/
function intr(){
  /*initialize contents*/
  document.getElementById('myDiv').innerHTML = "";
  d3.select("#suggestion").text("");
  nav.text("CONTINUE");

    /*Add an image and its scource link*/
  var img = document.createElement("IMG");
  img.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/971531/ad.jpg";
  document.getElementById('myDiv').appendChild(img);

  var tag=document.createElement('a');
  var linkText = document.createTextNode("Picture Source: Boomer Health Institute")
  tag.appendChild(linkText);
  tag.href="http://boomerhealthinstitute.com/the-preventive-prescription-for-alzheimers-exercise/"
  document.getElementById('myDiv').appendChild(tag);

  /*display other contents*/
  finding.html(findingtext[0]);
  summary.html(summarytext[0]);
  instruction.html(instructiontext[0]);
  obj=document.getElementById("0");
  cngClass(obj);
};

function viz(step){
  document.getElementById('myDiv').innerHTML = "";

  /*Draw Trend page*/
  if (step===1){
       var year=[1976,1978,1979,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016];

    var trials=[1,4,4,4,8,13,5,25,24,18,22,44,46,54,49,49,76,95,107,148,153,149,156,111,166,198,174,190,213,136,172,140,151,166,182,201,161,186,30];

    var most_cited_id=[0,351807,534419,7023592,6753611,6347034,6366565,3897460,2430180,3553166,3137593,2753374,2292704,1674295,1406817,8351023,8139083,7617154,8915035,9110909,9845158,10066203,11001602,11445252,12482085,12771112,14734594,15829527,16801647,17460158,18768414,19923550,20065132,19660834,21911655,23390181,24450891,25771249,26238576];

    var allpubs=[47,54,63,95,110,161,264,319,414,610,817,858,974,1347,1360,1464,1559,1646,2041,2082,2449,2641,2797,2824,3244,3344,3610,3634,4014,4222,4569,4530,4863,5280,5982,6278,7049,7428,8008,8367,9354];

    var trace1={
    name:'clinical trials',
    text:trials.map(function(e){return "publications"}),
      x: year,
    y: trials,
    type: 'bar',
      opacity:'0.8'
      };

    var trace2={
    name:'all related studies',
    text:allpubs.map(function(e){return "publications"}),
    x: year,
    y: allpubs.map(function(e){return e}),
    type: 'bar',
      opacity:'0.8'
      };

    var data=[trace1,trace2];

    var layout={
      title:"40 years World Wide Trends on AD Related Publications <br>(1976~2016, PubMed)",
      titlefont:{
        size:22,
        family: 'Georgia',
        color: 'black'
      },
      legend: {
        x: 0.05,
        y: 1,
        bgcolor: '#E2E2E2'
        },
      xaxis: {
        dtick: 1,
        ticklen: 8,
        tickwidth: 1,
        tickcolor: '#000'
        },

      yaxis: {
        title: 'annual publications',
        },

      };

    Plotly.newPlot(myPlot, data, layout);
    myPlot.on('plotly_click', function(data){
      console.log(data.points[0]);
      var i=data.points[0].pointNumber
      var links = most_cited_id.map(function(e){
        return "https://www.ncbi.nlm.nih.gov/pubmed/"+e
      });
      var link=links[i];
      window.open(link)
      });
  };


  /*Draw Journals page*/
  if (step===2){
        var citation_per_paper=[34.0297619,6.910179641,10.66964286,22.34234234,7.745454545,33.90721649,8.697916667,10.64197531,11.15189873,4.357142857
];
    var impact_factor= [8.166,3.408,2.53,5.153,3.920 ,7.419, 3.086,4.235, 3.842,2.22];
    var allcitations=[5717,1154,1195,2480,852,3289,835,862,881,244];


    var journals=[
      "1.Neurology",
      "2.Dementia and geriatric cognitive disorders",
      "3.Alzheimer disease and associated disorders",
      "4.Neurobiology of aging",
      "5.Journal of Alzheimer's disease:JAD",
      "6.Archives of neurology",
      "7.International journal of geriatric psychiatry",
      "8.The American journal of geriatric psychiatry",
      "9.Journal of the American Geriatrics Society",
      "10.International psychogeriatrics"
      ];
    var links=["http://www.neurology.org/",
               "http://www.karger.com/Journal/Home/224226",
               "http://journals.lww.com/alzheimerjournal/pages/default.aspx",
               "http://www.neurobiologyofaging.org/",
               "http://www.j-alz.com/",
               "http://jamanetwork.com/journals/jamaneurology",
               "http://onlinelibrary.wiley.com/journal/10.1002/(ISSN)1099-1166",
               "http://www.ajgponline.org/",
               "http://onlinelibrary.wiley.com/journal/10.1111/(ISSN)1532-5415",
               "https://www.cambridge.org/core/journals/international-psychogeriatrics"
               ];


    var rank=["1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th"];
    var traces=impact_factor.map(function(_,i){
      return {
        //name:rank[i],
        name:journals[i],
        x:[impact_factor[i]],
        y:[citation_per_paper[i]],

        mode:"markers",
        marker:{
          size:20,
          //color:colors[9-i]
          },
        opacity:'0.5'
        };
    });

    var data = traces;
    var layout = {
      legend:{
        x:1,
        y:1,
      },
      title: 'Top 10 Cited Journals (1976~2016, PubMed)',
      titlefont:{
        size:22,
        family: 'georgia',
        color: 'black'
      },

      xaxis:{
        title:"Journal Impact Factor",
        },
      yaxis:{
        title:"average citations per paper"
        }
    };

    Plotly.newPlot('myDiv', data, layout);

    myPlot.on('plotly_click', function(data){
      console.log(data.points[0].curveNumber);
      var link = links[data.points[0].curveNumber];
      window.open(link)
      });

    };



  /*Draw Papers page*/
  if (step===3){
    var titles=["The Repeatable Battery for the Assessment of Neuropsychological Status (RBANS): preliminary clinical validity.",
                "Vitamin E and donepezil for the treatment of mild cognitive impairment.",
                "Estrogen plus progestin and the incidence of dementia and mild cognitive impairment in postmenopausal women: the Women's Health Initiative Memory Study: a randomized controlled trial.",
                "Neuropathology of older persons without cognitive impairment from two community-based studies.",
                "Subacute meningoencephalitis in a subset of patients with AD after Abeta42 immunization.",
                "Clinical effects of Abeta immunization (AN1792) in patients with AD in an interrupted trial.",
                "Dynamics of gray matter loss in Alzheimer's disease.",
                "Effect of physical activity on cognitive function in older adults at risk for Alzheimer disease: a randomized trial.",
                "A controlled trial of selegiline, alpha-tocopherol, or both as treatment for Alzheimer's disease. The Alzheimer's Disease Cooperative Study.",
                "Memantine in moderate-to-severe Alzheimer's disease."
].reverse();
    var authors=["Randolph C",
                 "Petersen RC",
                 "Shumaker SA",
                 "Bennett DA",
                 "Orgogozo JM",
                 "Gilman S",
                 "Thompson PM",
                 "Lautenschlager NT",
                 "Sano M",
                 "Reisberg B"].reverse();

    var years=[1998,2005,2003,2006,2003,2005,2003,2008,1997,2003].reverse();
    var citations=[341,340,332,292,287,269,257,230,230,220].reverse();

    var ids=[9845158,15829527,12771112,16801647,12847155,15883316,12574429,18768414,9110909,12672860].reverse();


    var data=ids.map(function(_,i){
      return{
        type:"bar",
        orientation:"h",
        name:authors[i],
        x:[citations[i]],
        y:[authors[i]],
        text:[""],
        //marker:{color:colors[i]}
        opacity:'0.5'
      }
    });


    var layout={
      legend:{
        x:1,
        y:0
      },
      title:"Top 10 Most Cited Papers on AD related Clinical Trials <br>(1976~2016, PubMed)",
      titlefont:{
        size:22,
        family: 'georgia',
        color: 'black'
      }

    };

    Plotly.newPlot('myDiv', data,layout);
    myPlot.on('plotly_click', function(data){

      var i=data.points[0].curveNumber;
      var links = ids.map(function(e){return "https://www.ncbi.nlm.nih.gov/pubmed/"+e});
      var link=links[i];
      window.open(link)
      });
  }
  /*Draw Recent page*/
  if (step===4){
    var years=["2014 Jan 23",
               "2014 Jan 22",
               "2013 Oct 3",
               "2013 May 7",
               "2012 Jan"].reverse();

    var citations=[163,176,129,170,173].reverse();
    var titles=[
      "Phase 3 trials of solanezumab for mild-to-moderate Alzheimer's disease.",
      "Two phase 3 trials of bapineuzumab in mild-to-moderate Alzheimer's disease.",
      "Long-term cognitive impairment after critical illness.",
      "Alzheimer disease in the United States (2010-2050) estimated using the 2010 census.",
      "Intranasal insulin therapy for Alzheimer disease and amnestic mild cognitive impairment: a pilot clinical trial."].reverse();
    var ids=[24450890,24450891,24088092,23390181,21911655].reverse();
    var authors=["Doody RS",
                 "Salloway S",
                 "Pandharipande PP",
                 "Hebert LE",
                 "Craft S"
                 ].reverse();

    var data=ids.map(function(_,i){
      return{
        type:"bar",
        orientation:"h",
        name:authors[i],
        x:[citations[i]],
        y:[authors[i]],
        text:[""],
        //marker:{color:colors.slice(0,5)[i]}
        opacity:'0.5'
      }
    });


    var layout={
      title:"Top 5 Most Cited Clinical Trial Papers in Recent 5 Years <br> (2012~2016, PubMed)",
      titlefont:{
        size:22,
        family: 'georgia',
        color: 'black'
      }

    };

    Plotly.newPlot('myDiv', data,layout);
    myPlot.on('plotly_click', function(data){
      var i=data.points[0].curveNumber;
      var links = ids.map(function(e){return "https://www.ncbi.nlm.nih.gov/pubmed/"+e});
      var link=links[i];
      window.open(link)
      });
  } ;

  /*Draw Advice page*/
  if (step===5){
    nav.text("Re-READ");
    document.getElementById('myDiv').innerHTML = "";
    var img = document.createElement("IMG");
    img.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/971531/life-style.jpg";
    document.getElementById('myDiv').appendChild(img);

    d3.select("#instructions").style("text-align","left");
    var suggestion=d3.select("#suggestion");
    var suggestiontext="<b>As we found before, amyloid clearance therapy has been proved a bitter failure. And new directions are still in explorative phase. Practically speaking at least within 5 years there won't be a cure for AD. However, here are some life style suggestions in preventing and reducing the effects of AD  :</b><br><br>";
    suggestion.html(suggestiontext);
  };

  /*Display contents in summary, instruction and mark vertical nav bar*/
  finding.html(findingtext[step]);
  summary.html(summarytext[step]);
  instruction.html(instructiontext[step]);
  obj=document.getElementById(step);
  cngClass(obj);

}
