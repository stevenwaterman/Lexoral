import{S as U,i as V,s as X,q as Z,r as ee,m as te,k as oe,w as se,e as n,g as i,c as o,f as s}from"../../chunks/vendor-f4f84365.js";import{B as ne}from"../../chunks/BlogPost-5e21279f.js";import"../../chunks/Template-94d9f3df.js";import"../../chunks/TextContainer-6589f45b.js";import"../../chunks/date-75a350e3.js";import"../../chunks/DiagonalSection-499ac599.js";function ie(q){let l,u,a,r,p,M,f,G,m,W,h,E,y,S,d,Y,b,O,w,j,c,B,v,D,k,F,x,P,I,A,L,N,T,J,C,K,g,R,H,z,_,Q,$;return{c(){l=n("p"),l.textContent=`The intro to this article probably gives you more questions than answers.
    What does being open-source have to do with punishment?
    Why would you want to punish us?
    Why would we encourage that?`,u=i(),a=n("p"),a.textContent=`In essence, being open-source means that our customers always have another option.
    It's permanent, and irrevocable.
    The license could change, but you still have the right to download the code as it is today, and run it yourself without paying us anything.`,r=i(),p=n("p"),p.textContent="Making Lexoral open-source gives all of our users that option of last resort - the equivalent of Disney coming out and saying:",M=i(),f=n("blockquote"),f.innerHTML=`We promise to make sure that all our movies are accessible to everyone:

    <ul><li>If there is no legal way to buy one of our movies, please pirate it.</li> 
      <li>If you can&#39;t afford one of our movies, please pirate it.</li> 
      <li>If one of our movies isn&#39;t in your language, then pirate it, dub it, and sell it yourself.</li></ul>`,G=i(),m=n("p"),m.textContent=`That's unimaginable, but if it did happen, I'd certainly trust them more, and I'd trust that our incentives were aligned.
    I'd trust that their movies would be more accessible, available in all languages, and priced affordably worldwide.
    Put simply, I'd trust that they cared about their customers over their profit.`,W=i(),h=n("p"),h.textContent=`That fake quote is very similar to what we promise you.
    Lexoral is an ethical company, and will earn your trust:`,E=i(),y=n("ul"),y.innerHTML=`<li>If we betray your trust, please steal our software.</li> 
    <li>If we don&#39;t provide value for money, please steal our software.</li> 
    <li>If we ignore your feature requests, <strong>please steal our software, add them yourself, and start selling it to others.</strong></li>`,S=i(),d=n("p"),d.innerHTML=`It&#39;s not really stealing, because it&#39;s your legal right to do so under our <a href="https://github.com/stevenwaterman/Lexoral/blob/stage/LICENSE">license</a>.
    Here&#39;s how you can use our open-source nature to punish us:`,Y=i(),b=n("h2"),b.textContent="Reading the Code",O=i(),w=n("p"),w.innerHTML=`Our code is hosted on GitHub, and is publicly available <a href="https://github.com/stevenwaterman/Lexoral/">here</a>.
    All our code is on there, updated multiple times a day, even the things we haven&#39;t released yet.
    Even this blog post is open-source: you can see its code and make suggestions <a href="https://github.com/stevenwaterman/Lexoral/blob/stage/frontend/landing/src/routes/blog/open-source-punish.svelte">here</a>.
    I try to keep the documentation up-to-date, but if you&#39;re confused, feel free to <a href="https://github.com/stevenwaterman/Lexoral/issues/new">open an issue</a> and ask for help.`,j=i(),c=n("p"),c.innerHTML=`Not only can you look through the current state of the code, you can also look at every previous version, or the history for any file.
    You can see the full list of changes, known as commits, <a href="https://github.com/stevenwaterman/Lexoral/commits/stage">on GitHub</a>.
    Each one has a timestamp and a description, so you can get a rough idea of what was changed.`,B=i(),v=n("p"),v.textContent=`I'm not going to try and give a full description of how to use GitHub here, but you get the idea.
    Everything we do is published for you to explore.
    Don't trust us?
    Keep an eye on the commit history, and you'll know exactly what we're up to.
    Want more information about something?
    Just get in touch, I'm happy to chat about the reason behind any changes!`,D=i(),k=n("h2"),k.textContent="Taking the Code",F=i(),x=n("p"),x.textContent=`In this section, assume that I have died and been replaced by someone evil.
    They broke your trust, broke my promises, and it's time for that option of last resort.
    You want to take our code, and run it yourself.
    To make punishing us as easy as possible, here are some instructions:`,P=i(),I=n("p"),I.innerHTML=`First of all, you&#39;ll want to <a href="https://docs.github.com/en/get-started/quickstart/fork-a-repo">fork Lexoral on GitHub</a>.
    This gives you a copy of our code that you can edit on your own, independent of our version.
    The Lexoral repository is set up to deploy to <a rel="exteranl" href="https://cloud.google.com/">Google Cloud</a> automatically using <a href="https://github.com/stevenwaterman/Lexoral/tree/stage/.github/workflows">GitHub Actions</a> and <a href="https://github.com/stevenwaterman/Lexoral/tree/stage/terraform">Terraform</a>.`,A=i(),L=n("p"),L.innerHTML=`You&#39;ll need to set up a Google Cloud Platform account, and create a project on there.
    Then, replace any mentions of <code>lexoral-prod</code> with the name of your new project.
    There may be a few other things to change over, but you should be able to get it working with a little bit of effort.
    You&#39;ll also need to work through the list of <a href="https://github.com/stevenwaterman/Lexoral/blob/stage/terraform/manual_setup_required.md">manual setup steps</a>, because we haven&#39;t managed to automate everything yet.`,N=i(),T=n("p"),T.innerHTML=`If you get stuck, you can contact me and ask for help.
    Given that we&#39;re assuming I&#39;ve died, you can also ask a friend who works in <em>DevOps</em>, <em>Cloud</em>, <em>Full-Stack Web</em>, or something like that.
    It&#39;ll be simple for anyone experienced in cloud deployment.`,J=i(),C=n("h2"),C.textContent="Why would I do this?",K=i(),g=n("p"),g.textContent=`Companies make promises all the time, and then they break them with no consequences.
    For really important things, they'll sign contracts, but that's not much use if the company goes bankrupt or the owner dies.
    Sometimes they'll have a money-back guarantee, but for all you know that could be a lie too!`,R=i(),H=n("p"),H.innerHTML=`Being open-source lets you verify our promises.
    It lets you see what we&#39;re doing behind the scenes, and it lets you punish us when we don&#39;t stick to our promises.
    It means that, no matter how badly we treat you, or how evil my replacement is, you don&#39;t have to deal with it.
    You can leave, and still get value from Lexoral.
    It might not be <em>as</em> convenient, but it hurts me the most.
    Our incentives are properly aligned.`,z=i(),_=n("p"),_.textContent=`I've just written some really detailed instructions about how you can bankrupt Lexoral.
    I'm not worried about that though.
    When I claimed we're an ethical company, I meant it:
    I can't imagine a future in which you'll need those instructions.`,Q=i(),$=n("p"),$.textContent="There's no better way to show that you can trust us."},m(e,t){o(e,l,t),o(e,u,t),o(e,a,t),o(e,r,t),o(e,p,t),o(e,M,t),o(e,f,t),o(e,G,t),o(e,m,t),o(e,W,t),o(e,h,t),o(e,E,t),o(e,y,t),o(e,S,t),o(e,d,t),o(e,Y,t),o(e,b,t),o(e,O,t),o(e,w,t),o(e,j,t),o(e,c,t),o(e,B,t),o(e,v,t),o(e,D,t),o(e,k,t),o(e,F,t),o(e,x,t),o(e,P,t),o(e,I,t),o(e,A,t),o(e,L,t),o(e,N,t),o(e,T,t),o(e,J,t),o(e,C,t),o(e,K,t),o(e,g,t),o(e,R,t),o(e,H,t),o(e,z,t),o(e,_,t),o(e,Q,t),o(e,$,t)},d(e){e&&s(l),e&&s(u),e&&s(a),e&&s(r),e&&s(p),e&&s(M),e&&s(f),e&&s(G),e&&s(m),e&&s(W),e&&s(h),e&&s(E),e&&s(y),e&&s(S),e&&s(d),e&&s(Y),e&&s(b),e&&s(O),e&&s(w),e&&s(j),e&&s(c),e&&s(B),e&&s(v),e&&s(D),e&&s(k),e&&s(F),e&&s(x),e&&s(P),e&&s(I),e&&s(A),e&&s(L),e&&s(N),e&&s(T),e&&s(J),e&&s(C),e&&s(K),e&&s(g),e&&s(R),e&&s(H),e&&s(z),e&&s(_),e&&s(Q),e&&s($)}}}function le(q){let l,u;return l=new ne({props:{id:"open-source-punish",$$slots:{default:[ie]},$$scope:{ctx:q}}}),{c(){Z(l.$$.fragment)},m(a,r){ee(l,a,r),u=!0},p(a,[r]){const p={};r&1&&(p.$$scope={dirty:r,ctx:a}),l.$set(p)},i(a){u||(te(l.$$.fragment,a),u=!0)},o(a){oe(l.$$.fragment,a),u=!1},d(a){se(l,a)}}}class he extends U{constructor(l){super();V(this,l,null,le,X,{})}}export{he as default};
