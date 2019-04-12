// this is a situational fix for the presentation on 12.04.2019, but not the solution for the import (yet)
// we're currently using the "iA Writer" HTML export here

import React, {Component} from 'react';

export default class Export extends Component {

	render() {
		return(
			<article>
			<h2>Introduction</h2>

			<p>This is a text on the internet. There are many like it but this one is mine;<br/>
			and yours;<br/>
			and everyones;<br/>
			ever changing;<br/>
			never finished.</p>

			<p>I'm going on an adventure by my own choosing, to think and write about the landscape we're currently<sup><a href="#fn1-31923" id="fnr1-31923" title="see footnote" class="footnote">1</a></sup> in and the changes to our collective way of thinking about ourselves and the society<sup><a href="#fn2-31923" id="fnr2-31923" title="see footnote" class="footnote">2</a></sup> we're part of.
			Thinking back, the last two decades marked a drastically shift in the ways individuals and groups communicate with each other in a modern world. The expectation that everyone around us knows how to use (and misuse) the new tools of communication and information seem to unearth the ambiguity of the underlying concepts. With the implementation of this ambiguity into fixed systems – built by private companies – our society also seems to lose the agency to advance them in the future. This is a pessimistic view of <a href="https://en.wikipedia.org/wiki/Digitization">digitization</a> and falls in line with the way of thinking of the <a href="https://en.wikipedia.org/wiki/Swing_Riots">Swing Riots in the 1830s</a>. One could think with the rhetoric used in news articles<sup><a href="#fn3-31923" id="fnr3-31923" title="see footnote" class="footnote">3</a></sup> discussing pitfalls and setbacks – from the point of view of companies working in these fields – that an <a href="https://en.wikipedia.org/wiki/Orwellian">&quot;Orwellian Dystopia&quot;</a> is the only logical outcome. A worrying outlook, but in my humble opinion is this not the entire story and much of it is still in our – individual and collective – hands.<br/>
			Maybe these changes we're all currently experiencing give us an opportunity not just to reflect the new implementations of everyday interactions, but also to reflect the interactions and concepts they're based on. Grand shifts in society tended to discuss specific variables and rarely society in its entirety, but that is exactly what we're currently undergoing when we try to translate more and more aspects and interactions into the digital realm under the flag of efficiency, and the result is a deadening and confusion amongst our peers and ourselves.</p>

			<p>This essay doesn't only give a highly subjective and opinionated view of the matters at hand, but also challenge the reader with a few obstacles along the way. The structure isn't fixed, the conclusions and views are ever shifting – even while you're currently reading this –, and over time, there will be additional changes I and hopefully other will supply to this essay. You can follow and judge the progression of this construct on the <a href="https://github.com/blank-tree/permanentbeta.xyz">Git-Repository</a><sup><a href="#fn4-31923" id="fnr4-31923" title="see footnote" class="footnote">4</a></sup> or more specifically in the <a href="https://github.com/blank-tree/permanentbeta.xyz/commits/master">commit history</a>.</p>

			<h2>The digital space</h2>

			<figure>
			<img src="https://images-na.ssl-images-amazon.com/images/I/51K5MWCVQAL._SX258_BO1,204,203,200_.jpg" alt="" />
			</figure>

			<p>When we think about &quot;space&quot; we most commonly use it in two contexts: a physically existing space located in the world or a metaphorical one which often refers to time. I argue, that the digital space is like no other we have know before, because when you compare it, it doesn't behave like other spaces, encapsulated within themselves, but it penetrates all other spaces in our physical world. In 1967, Michel Foucault described his concept of <a href="https://en.wikipedia.org/wiki/Heterotopia_(space)">Heterotopia</a> like the following:</p>

			<blockquote>
			<p>&quot;There are also, probably in every culture, in every civilization, real places—places that do exist and that are formed in the very founding of society—which are something like counter-sites, a kind of effectively enacted utopia in which the real sites, all the other real sites that can be found within the culture, are simultaneously represented, contested, and inverted. Places of this kind are outside of all places, even though it may be possible to indicate their location in reality. Because these places are absolutely different from all the sites that they reflect and speak about, I shall call them, by way of contrast to utopias, heterotopias.&quot;<br/>
			<a href="http://web.mit.edu/allanmc/www/foucault1.pdf">Michel Foucault: <em>Of Other Spaces: Utopias and Heterotopias</em></a></p>
			</blockquote>

			<figure>
			<img src="https://attheirmajestiespleasure.files.wordpress.com/2017/10/974ea86fa12182de84b24575d77f609d-foucault-michel-philosophers.jpg" alt="" />
			</figure>

			<p>The description Foucault provided seems to be fitting to a romantic description of the internet over forty years before it became part of our everyday life. One could argue, that the internet isn't &quot;real&quot; and only exists in a form of interpretation and translation an isn't bound to a physical space<sup><a href="#fn5-31923" id="fnr5-31923" title="see footnote" class="footnote">5</a></sup> like ships or brothels, but to a certain extent the same specifications Foucault describes seem to fit to the world wide web.</p>

			<blockquote>
			<p>Heterotopias always presuppose a system of opening and closing that both isolates them and makes them penetrable. In general, the heterotopic site is not freely accessible like a public place. Either the entry is compulsory, as in the case of entering a barracks or a prison, or else the individual has to submit to rites and purifications. To get in one must have a certain permission and make certain gestures. [...]<br/>
			<a href="http://web.mit.edu/allanmc/www/foucault1.pdf">Michel Foucault: <em>Of Other Spaces: Utopias and Heterotopias</em></a></p>
			</blockquote>

			<p>The submission to these new forms of communication is becoming a requirement to stay relevant within society, with even jobs requiring digital application in fields which don't this specific skillset in their practice. To a certain extend, the ability to navigate through the digital forms of communication and interaction became the new center piece our education is concerned and struggling with to give people the means to comprehend our world. But this tends towards the usage and not the understanding or reflections of these &quot;tools&quot;. If we follow the submission we're actively dividing our society into &quot;users of technology&quot; and &quot;absentees&quot;. The threshold that one has to overcome to communicate with someone for longer then just one or two interactions in person <strong>without</strong> a smartphone<sup><a href="#fn6-31923" id="fnr6-31923" title="see footnote" class="footnote">6</a></sup> and availability through instant messaging or e-mail, is larger in comparison than with someone who's using these tools like you. Maybe we're constantly peer-pressuring – without specifically intending to do so – other people to join our digital heterotopia of efficiency. </p>

			<h2>All linked by information</h2>

			<figure>
			<img src="https://imgs.xkcd.com/comics/wikipedian_protester.png" alt="" />
			</figure>

			<p>It can be argued, that the human &quot;need&quot; to receive, transfer and share information as a survival mechanism found its logical continuation in the internet. The efficient transfer from speech, to text in its physical form to a fluid accessible digital form divided in bits and bytes delivered to our screens is a causality follow by an ideology of constant progress as a society and species. But in this regard, I'm confused by what &quot;progress&quot; actually is: </p>

			<p><iframe src="https://player.vimeo.com/video/191817381#t=23m26s" width="640" height="358" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></p>

			<p><iframe src="https://player.vimeo.com/video/300725472#t=28m" width="640" height="358" frameborder="0" allow="autoplay; fullscreen"></iframe></p>

			<h2>About</h2>

			<p>In the beginning, this essay was written by <a href="https://fernando-obieta.com">Fernando Obieta</a> in his second Semester at the <a href="https://zhdk.ch">Zurich University of the Arts</a> enrolled in the masters program <a href="https://www.zhdk.ch/en/degree-programmes/transdisciplinary-studies-73/transdisciplinarystudies">&quot;Transdisciplinary Studies in the Arts&quot;</a>.</p>

			<div class="footnotes">
			<hr />
			<ol>

			<li id="fn1-31923">
			<p>which is – when this project works in the intended way – now and in the future <a href="#fnr1-31923" title="return to article" class="reversefootnote">&#8617;&#xFE0E;</a></p>
			</li>

			<li id="fn2-31923">
			<p>In my case right now: the German speaking part of Switzerland in April 2019 <a href="#fnr2-31923" title="return to article" class="reversefootnote">&#8617;&#xFE0E;</a></p>
			</li>

			<li id="fn3-31923">
			<p>like the <a href="https://en.wikipedia.org/wiki/Cambridge_Analytica">Facebook–Cambridge Analytica data scandal 2018</a>, the leaks surrounding <a href="https://en.wikipedia.org/wiki/Global_surveillance_disclosures_(2013%E2%80%93present)">surveilance</a> which are on an all time high since the <a href="https://en.wikipedia.org/wiki/Edward_Snowden#Global_surveillance_disclosures">Snowden leaks in 2013</a>, the list is long... <a href="#fnr3-31923" title="return to article" class="reversefootnote">&#8617;&#xFE0E;</a></p>
			</li>

			<li id="fn4-31923">
			<p>a <a href="https://en.wikipedia.org/wiki/Version_control">version control system</a> used and misused by programmers all over the world for sharing and collaborating on a variety of code based projects <a href="#fnr4-31923" title="return to article" class="reversefootnote">&#8617;&#xFE0E;</a></p>
			</li>

			<li id="fn5-31923">
			<p>at least, not anymore since the era of the &quot;internet cafes&quot; died in the early 2000s <a href="#fnr5-31923" title="return to article" class="reversefootnote">&#8617;&#xFE0E;</a></p>
			</li>

			<li id="fn6-31923">
			<p>this is going to be crucial to update in the future! Who knows when the next thing will take over... <a href="#fnr6-31923" title="return to article" class="reversefootnote">&#8617;&#xFE0E;</a></p>
			</li>

			</ol>
			</div>
			</article>
			);
}

}