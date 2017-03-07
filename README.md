# p6_data_visualization
Create a data visualization from a data set that tells a story or highlights trends or patterns in the data.  
  
[Initial Visualization](http://codepen.io/Heronwang/pen/ygvZNj)  
[Final Visualization](http://codepen.io/Heronwang/pen/pRaGvL)  

##Summary  
Young researchers often have difficulty in balancing the implementation of their own ideas and updating the knowledge of their field. As newbies we quite often get lost in endless sea of literature. But with very limited time we have as PhD trainees, how can we distinguish the milestone work from mediocre ones, and find the worthwhile piece of work to read? Here I shall share my own experience of using data techniques to find impactful researches and form ideas of Alzheimer's Disease(AD).  

##Design 
I am interested in finding trends, choosing  impactful journals and spoting breakthrough studies.And among all research papers I am especially interested in clinical trials since they are most likely to produce treatments and cures in future.  After downloaded and processed all clinical articles published in last 4 decades on Alzheimer's Disease from PubMed, I drawed a outline of my story with 6 component graphs:  

>**1. Introduction page** - explaning my initiatives in starting this visualization and providing general knowledge about Alzheimer's Disease  

>**2. World wide trends** - visualizing and comparing trends in publications of non-clinical and clinal articles using a bar chart, as it is a perfect option in showing time dependent change. To allow readers explore freely, hyper links and hover infomation are necessary. At first I considered to add transition animation effect when the chart is loaded. But in the end it was dropped since plot.js doesn't support this feature temporarily.  

>**3. Top 10 impactful journals** - scattering the 10 journals with most clinical papers on them,  exploring the relationship between the citation per paper and impact factor of each journal.  I want to find the most suitable journal (comprehensive and influencial) for researchers in Alzheimer's Disease field to subscribe.  Similarly, hover infomation and hyper link should be included for extensive reading.  

>**4. Top 10 most cited papers**- Citation is very important index in estimating how influential a study is among peers. I assume that those with hignest citations must not be mediocre research. With a horizontal bar chart, I wanted to list those top papers and show supporting infomation such as abstract, key words and media covarage once a bar is clicked. (But this feature was cancelled later since I find it is better to wrap these papers in a chronlogical story. )  

>**5. Top 5 most cited papers published in last 5 years**- To understand this field better, I believe it's necessary to add in the most relevent context, which is the lastest progress in this field.  Since old papers tend to outcompete new ones on citations due to natural priviledge, I simply applied filter on the publish date. Then sort again by citations. Similarly a horizontal bar char is used. Interative supporting info was first arranged at bottom individually.  

>**6. Summary page** - summarising the project, give insights and relevent infomation to readers. (In final version I added references section)  


##Feedback  
###Feedback(1). Friend who working as PhD student in cell biology:  
Great job. Love it. But  the color of few can be made a bit more bright. They looks a bit too subtle and confusing for readers. Even if it's sequential color, bright colors might be better. The black and gray and the subtle changes are difficult to figure out.  

>**revision:** I changed the color theme from gray to default color setting with decreased the opacity to make visualizations clear and clean .  

###Feedback(2). Friend who is a software engineer and graduate of DAND:   
Really impressive visualization. Here is my feedback  
1. What do you notice in the visualization?  
Visualiztion shows the research on Alzheimers disease. The metrics are based on the number of clinical trials conducted, number of papers published, top cited journals.  

2. What questions do you have about the data?  
Good selection of data and data manipulation and extraction as well. Noticed that you are manipulating the data to get papers published in the last 5 years  

3. What relationships do you notice?  
First, the number of clinical trials on alzheimers is almost constant. Doesnt see much variation after 1995. Constant at 100-200 papers per year and less than 100 papers before 1995. Second, papers published on journals with high impact factor had more citations on average.  

4. What do you think is the main takeaway from this visualization?   
The amount of research done on alzheimers is increasing exponentially.  
5. Is there something you don’t understand in the graphic?  
No.  

6. How can this visualization be improved?  
1.Navigating through the visualization is a bit cumbersome. To navigate to a previous page there is no back button. So need to go one full round and come back. A back button to go to previous visualizations would be good.   
2.The "Continue" / "Back" button should be somewhere on top or sides such that it is easily accessible. Since the page height changes with each visualization not very easy to quickly glance through.  
3.More colours can be used for visualization 2,3 and 4. Using only black and grey gives it a dull feeling.
4.On visualizations 2,3 and 4. It is not very obvious that the legend can be clicked and used to add/remove bars on the barchart or scatter points on the scatter plot. The explanation below does not mention it also (like how it mentions hover and click through links)  

Overall a really great project :) Well done.  

>**revision:** I added a navigation on the left of visualization to ease reading and correctify the instruction infomation.  

###Feedback(3). Friend who is an App developer:  
Got a few things to point out.  
The graph about world wide trends and impactful research, with data on clinical trials and all related studies is spot on! It was a well-chosen graph that shows the increasing numbers and the overall trend over the past few years. It explains your point very well and the graph is adding to your narrative.  
The next graph is about Top 10 cited journals and shows two factors in a scatter diagram: average citations per paper and journal impact factor. A scatter diagram is only appropriate when you are trying to show a relation (directly proportional or inversely proportional or any trend) between the two factors plotted along X and Y axes. Are you sure that you are trying to show that higher the journal impact factor, te more citations they have per paper? That is, are you trying to say that journals with a higher impact factor cite more often? In my opinion, given this graph, there is a link between the two. That is, I can conclude that journals with higher impact factor indeed cite more papers. However, the concluding line says that they are great resources for following up on further news. So you need to decide what your narrative is.  

>**revision:** Considering that my initial narratives aren't explicit enough and it leads to misunderstanding here, I rewrote the narratives to make story more clear and well transitioned.  

##Resources  
**1. Code and help**  
• [Inspiration from gabrifc's visualization,'Clay feet of giant'](https://github.com/gabrifc/Udacity-Data-Analyst-Nanodegree/blob/master/P6%20-%20Data%20Visualization)  
• [Plotly.js, a very beginner-friendly graphing library](https://plot.ly/javascript/ )  
• [W3school, for doubts and demos on html tags, javascript syntax, css style](http://www.w3schools.com/graphics/svg_intro.asp)   

**2.Useful tools**  
• [PubMed, the data source](https://www.ncbi.nlm.nih.gov/pubmed)  
• [Fred's data scraping blog](http://www.fredtrotter.com/2014/11/14/hacking-on-the-pubmed-api)  
• [URL request editor](http://meyerweb.com/eric/tools/dencoder/)  
• [Rentrez, integrated R library for PubMed data scraping](https://cran.rproject.org/web/packages/rentrez/vignettes/rentrez_tutorial.html)  

**3.Researches and reports on AD**  
• Solanezumab:  
http://www.alzforum.org/therapeutics/solanezumab  
http://www.nature.com/news/how-to-defeat-dementia-1.20949  
• Aducanumab  
• 2016 Mar review on 3 antibody drugs:solanezumab, crenezumab, Aducanumab  
• Insulin therapy:  
http://www.alzforum.org/therapeutics/nasal-insulin  
https://www.ncbi.nlm.nih.gov/pubmed/12467491  
https://clinicaltrials.gov/ct2/show/NCT01767909    

**4. Others**  
• [Initial page pic source](https://cran.r-project.org/web/packages/rentrez/vignettes/rentrez_tutorial.html)  
• [Background pic source](http://www.theholisticingredient.com/blogs/wholesome-living/98921158-a-truly-holistic-9-week-healthy-lifestyle-program-im-happy-to-recommend)  
• [Life style suggestions for AD patients](http://www.alzheimers.net/2015-10-14/how-alzheimers-could-be-type-2-diabetes/)  
•[ Befunky, online pic blurring tool](https://www.befunky.com/features/blur-image/)  
