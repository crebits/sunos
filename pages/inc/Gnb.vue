<template>
    <div class="gnb">
        <ul class="gnb_area">
            <li v-for='(list, index) in linklist' :key='index'>
                <router-link :to='list.link'>{{ list.content }}</router-link>
            </li>
        </ul>
	</div>
</template>

<script>
export default {
    name : "gnb",
    data () {
        return {
            linklist : [
                {content: 'HOME', link: '/'},
                {content: 'Portfolio', link: '/portfolio'},
                {content: 'About Me', link: '/about'},
                {content: 'Contact', link: '/contact'}
            ]
        }
    } 
}
</script>

<style>
.gnb { width:100%; position:fixed; left:0; top:0; background:rgba(0,0,0,0.6);z-index:999999; }
.gnb_area{text-align:center;padding:10px 0;}
.gnb_area li{display:inline-block;position:relative;}
.gnb_area li a { display:block;padding:10px 30px;color:#fff;font-size:16px;}
.gnb_area li a:before {content:'';position:absolute;bottom:0;left:0;width:100%;height:0;background:#fff;-webkit-transition:-webkit-transform 0.7s;transition:transform 0.7s;-webkit-transform:scale3d(0, 1, 1);transform: scale3d(0, 1, 1);}
.gnb_area li.active a:before {-webkit-transform: scale3d(1, 1, 1);transform:scale3d(1, 1, 1);height:1px;}

@media all and (max-width:768px) {
	.gnb ul { overflow:hidden; }
	.gnb ul li { float:left; width:25%; text-align:center; line-height:30px; }
	.gnb ul li a {padding:0}
}
</style>
