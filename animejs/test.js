import anime from 'anime.es.js';

	<script>
		function a_top(move){
			anime({
				targets: document.getElementById('top'),
				translateY: move,
				autoplay: false
			});
		}
		function a_bot(move){
			anime({
				targets: document.getElementById('bot'),
				translateY: move,
				autoplay: false
			});
		}
		function a_lef(move){
			anime({
				targets: document.getElementById('lef'),
				translateX: move,
				autoplay: false
			});
		}
		function a_rig(move){
			anime({
				targets: document.getElementById('rig'),
				translateX: move,
				autoplay: false
			});
		}
		
		document.getElementById('1').onclick = a_top(200);
		document.getElementById('1').onclick = a_bot(100);
		document.getElementById('1').onclick = a_lef(200);
		document.getElementById('1').onclick = a_rig(100);
		
		document.getElementById('2').onclick = a_top();
		document.getElementById('2').onclick = a_bot();
		document.getElementById('2').onclick = a_lef();
		document.getElementById('2').onclick = a_rig();
		
		document.getElementById('3').onclick = a_top();
		document.getElementById('3').onclick = a_bot();
		document.getElementById('3').onclick = a_lef();
		document.getElementById('3').onclick = a_rig();
		
-----

		var a_top = anime({
				targets: document.getElementById('top'),
				translateY: 200,
				autoplay: false
		});
		var a_bot = anime({
			targets: document.getElementById('bot'),
			translateY: 200,
			autoplay: false
		});
		var a_lef = anime({
			targets: document.getElementById('lef'),
			translateY: 200,
			autoplay: false
		});
		var a_rig = anime({
			targets: document.getElementById('rig'),
			translateY: 200,
			autoplay: false
		});
		
		document.getElementById('1').onclick = a_top.restart;

		
		document.getElementById('2').onclick = a_top.restart;
		document.getElementById('2').onclick = a_bot.restart;
		document.getElementById('2').onclick = a_lef.restart;
		document.getElementById('2').onclick = a_rig.restart;
		
		document.getElementById('3').onclick = a_top.restart;
		document.getElementById('3').onclick = a_bot.restart;
		document.getElementById('3').onclick = a_lef.restart;
		document.getElementById('3').onclick = a_rig.restart;