document.getElementById("form").addEventListener("click",
	function(event){
		event.preventDefault();
	}
)

let user_val;
let final_user_val;
let to_rate;
let from_rate;
let final_rate;
let usd;
let lkr;
let euro;
let x;
let y;
let curreny_display = document.querySelector(".values");


document.querySelector(".submit-btn").addEventListener("click",
	function(){
		user_val = document.querySelector("#value").value;
		final_user_val = parseFloat(user_val);
		x = document.querySelector("#to_rate").selectedIndex;
		y = document.querySelector("#from_rate").selectedIndex;
		from_rate = document.querySelector("#from_rate")[y].value;
		to_rate = document.querySelector("#to_rate")[x].value;

		if(user_val.length == 0){
			alert("Please Enter a Currency Value..!");
			location.reload();
		}

		else if(from_rate==to_rate){
			alert("Select Different Currency Rates..!");
			location.reload();
		}

		else if(from_rate==='USD' && to_rate==='euro'){
			euro = 0.85;
			final_rate = final_user_val*euro;
			curreny_display.innerHTML = `Calculated Currency rate : ${final_rate}€`;
			curreny_display.style.display = "block";
		}

		else if(from_rate==='USD' && to_rate==='lkr'){
			lkr = 200.03;
			final_rate = final_user_val*lkr;
			curreny_display.innerHTML = `Calculated Currency rate : Rs.${final_rate}`;
			curreny_display.style.display = "block";
		}

		else if(from_rate==='euro' && to_rate==='USD'){
			usd = 1.17;
			final_rate = final_user_val*usd;
			curreny_display.innerHTML = `Calculated Currency rate : $${final_rate}`;
			curreny_display.style.display = "block";
		}

		else if(from_rate==='euro' && to_rate==='lkr'){
			lkr = 233.99;
			final_rate = final_user_val*lkr;
			curreny_display.innerHTML = `Calculated Currency rate : Rs.${final_rate}`;
			curreny_display.style.display = "block";
		}

		else if(from_rate==='lkr' && to_rate==='USD'){
			usd = 0.0050;
			final_rate = final_user_val*usd;
			curreny_display.innerHTML = `Calculated Currency rate : $${final_rate}`;
			curreny_display.style.display = "block";
		}

		else if(from_rate==='lkr' && to_rate==='euro'){
			euro = 0.0043;
			final_rate = final_user_val*euro;
			curreny_display.innerHTML = `Calculated Currency rate : ${final_rate}€`;
			curreny_display.style.display = "block";
		}

		else{
			curreny_display.innerHTML = `Invalid Inputs..!`;
		}
	}

)

document.querySelector(".reset-btn").addEventListener("click",
	function(){
		location.reload();
	}
)