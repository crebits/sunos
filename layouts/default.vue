<template>
    <nuxt/>
</template>

<script>
export default {
	name: 'Default',
	data () {
		return {
			first : false
		}
	},
	mounted () {
		const homeArea = document.querySelector('.home-area');
		homeArea?.classList?.add('ani');
		setTimeout(()=> homeArea.classList.remove('ani'), 6000)
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Kaushan+Script');
@import url('https://fonts.googleapis.com/css?family=Varela+Round');

html,
body,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
address,
big,
cite,
code,
del,
dfn,
em,
font,
img,
ins,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
ul,
ol,
li,
dl,
dt,
dd,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
fieldset,
form,
label,
legend,
input,
button,
textarea,
select {
	margin:0;
	padding:0;
	box-sizing: border-box;
}

header,
footer,
section,
article,
aside,
nav,
hgroup,
details,
menu,
figure,
figcaption {
	display:block;
	margin:0;
	padding:0;
}

legend {
	display:block;
	overflow:hidden;
	position:absolute;
	width:1px;
	height:1px;
	font-size:1px;
	line-height:0;
	text-indent:-999em;
	white-space:nowrap;
}

fieldset,
img,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
button,
hr {
	border:0 none;
}

img {
	vertical-align:top;
}

body li {
	*vertical-align:top;
}

ul li {
	list-style:none;
	padding:0;
	margin:0;
}

table {
	border-collapse:collapse;
}

caption {
	visibility:hidden;
	overflow:hidden;
	width:0;
	height:0;
	font-size:0;
	line-height:0;
}

button {
	overflow:visible;
	border:0 none;
	cursor:pointer;
}

button::-moz-focus-inner,
input[type="button"]::-moz-focus-inner,
input[type="submit"]::-moz-focus-inner,
input[type="reset"]::-moz-focus-inner {
	padding: 0;
	border: 0 none;
}

body {
	position:relative;
	font-size:12px;
	font-family: nanum-gothic,'돋움',Dotum,Tahoma,Verdana,Geneva,Arial,Helvetica,sans-serif;
 	color:#8b8b8b;
	background:#000;
	margin:0;
}

a {
	text-decoration:none;
 	color:#666;
}

h2.title {
	font-family:'Varela Round', sans-serif;
	color: #fff;
	font-size: 42px;
	line-height: 43px;
	margin-bottom: 30px;
}

.content {
	position:relative;
	height:100%;
	
	/* margin:0 30px; */
	overflow: hidden;
	width:100%;
	margin: auto;
}

#project, .profile, #order {
	padding-top:100px;
	max-width:1200px;
	margin:0 auto;
}

@media (max-width:768px) {
	h2.title{
		font-size: 26px;
		line-height: 27px;
		margin: 0 0 20px 5%;
	}

	.content{
		margin:0;
		overflow: inherit;
	}
}

</style>

