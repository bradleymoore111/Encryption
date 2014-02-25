function encrypt (input) {
	var size = input.length
	var key = ""
	// Making the key
		for (i=0;i<size;i++){
			var tempDig = Math.floor(Math.random()*26+1)
			if(tempDig==1){tempDig="a"}
			if(tempDig==2){tempDig="b"}
			if(tempDig==3){tempDig="c"}
			if(tempDig==4){tempDig="d"}
			if(tempDig==5){tempDig="e"}
			if(tempDig==6){tempDig="f"}
			if(tempDig==7){tempDig="g"}
			if(tempDig==8){tempDig="h"}
			if(tempDig==9){tempDig="i"}
			if(tempDig==10){tempDig="j"}
			if(tempDig==11){tempDig="k"}
			if(tempDig==12){tempDig="l"}
			if(tempDig==13){tempDig="m"}
			if(tempDig==14){tempDig="n"}
			if(tempDig==15){tempDig="o"}
			if(tempDig==16){tempDig="p"}
			if(tempDig==17){tempDig="q"}
			if(tempDig==18){tempDig="r"}
			if(tempDig==19){tempDig="s"}
			if(tempDig==20){tempDig="t"}
			if(tempDig==21){tempDig="u"}
			if(tempDig==22){tempDig="v"}
			if(tempDig==23){tempDig="w"}
			if(tempDig==24){tempDig="x"}
			if(tempDig==25){tempDig="y"}
			if(tempDig==26){tempDig="z"}
			var key = key + tempDig
		}
	// End making the key


	var inputA = input.split("");
	var inputB = input.split("");
	var keyA = key.split("");
	var keyB = key.split("");

	// Converting to binary
	//	for(i=0;i<size;i++){
	//		inputA[i]=inputA[i].charCodeAt(0).toString(2);
	//		keyA[i]=keyA[i].charCodeAt(0).toString(2);
	//	}
	// End converting to binary

	// setting them equal to numbers
		for(i=0;i<size;i++){
			if(inputA[i]=="a"){inputA[i]=1}
			if(inputA[i]=="b"){inputA[i]=2}
			if(inputA[i]=="c"){inputA[i]=3}
			if(inputA[i]=="d"){inputA[i]=4}
			if(inputA[i]=="e"){inputA[i]=5}
			if(inputA[i]=="f"){inputA[i]=6}
			if(inputA[i]=="g"){inputA[i]=7}
			if(inputA[i]=="h"){inputA[i]=8}
			if(inputA[i]=="i"){inputA[i]=9}
			if(inputA[i]=="j"){inputA[i]=10}
			if(inputA[i]=="k"){inputA[i]=11}
			if(inputA[i]=="l"){inputA[i]=12}
			if(inputA[i]=="m"){inputA[i]=13}
			if(inputA[i]=="n"){inputA[i]=14}
			if(inputA[i]=="o"){inputA[i]=15}
			if(inputA[i]=="p"){inputA[i]=16}
			if(inputA[i]=="q"){inputA[i]=17}
			if(inputA[i]=="r"){inputA[i]=18}
			if(inputA[i]=="s"){inputA[i]=19}
			if(inputA[i]=="t"){inputA[i]=20}
			if(inputA[i]=="u"){inputA[i]=21}
			if(inputA[i]=="v"){inputA[i]=22}
			if(inputA[i]=="w"){inputA[i]=23}
			if(inputA[i]=="x"){inputA[i]=24}
			if(inputA[i]=="y"){inputA[i]=25}
			if(inputA[i]=="z"){inputA[i]=26}

			if(keyA[i]=="a"){keyA[i]=1}
			if(keyA[i]=="b"){keyA[i]=2}
			if(keyA[i]=="c"){keyA[i]=3}
			if(keyA[i]=="d"){keyA[i]=4}
			if(keyA[i]=="e"){keyA[i]=5}
			if(keyA[i]=="f"){keyA[i]=6}
			if(keyA[i]=="g"){keyA[i]=7}
			if(keyA[i]=="h"){keyA[i]=8}
			if(keyA[i]=="i"){keyA[i]=9}
			if(keyA[i]=="j"){keyA[i]=10}
			if(keyA[i]=="k"){keyA[i]=11}
			if(keyA[i]=="l"){keyA[i]=12}
			if(keyA[i]=="m"){keyA[i]=13}
			if(keyA[i]=="n"){keyA[i]=14}
			if(keyA[i]=="o"){keyA[i]=15}
			if(keyA[i]=="p"){keyA[i]=16}
			if(keyA[i]=="q"){keyA[i]=17}
			if(keyA[i]=="r"){keyA[i]=18}
			if(keyA[i]=="s"){keyA[i]=19}
			if(keyA[i]=="t"){keyA[i]=20}
			if(keyA[i]=="u"){keyA[i]=21}
			if(keyA[i]=="v"){keyA[i]=22}
			if(keyA[i]=="w"){keyA[i]=23}
			if(keyA[i]=="x"){keyA[i]=24}
			if(keyA[i]=="y"){keyA[i]=25}
			if(keyA[i]=="z"){keyA[i]=26}
		}
	// End converting them into numbers

	// Adding them together
	var combined = [];
		for(i=0;i<size;i++){
			combined[i]=keyA[i]+inputA[i];
		}
	// End adding them together

	// Set back to new encrypted output
		for(i=0;i<size;i++){
			if(combined[i]>26){combined[i]-=26;}
			if(combined[i]==1){combined[i]="a"}
			if(combined[i]==2){combined[i]="b"}
			if(combined[i]==3){combined[i]="c"}
			if(combined[i]==4){combined[i]="d"}
			if(combined[i]==5){combined[i]="e"}
			if(combined[i]==6){combined[i]="f"}
			if(combined[i]==7){combined[i]="g"}
			if(combined[i]==8){combined[i]="h"}
			if(combined[i]==9){combined[i]="i"}
			if(combined[i]==10){combined[i]="j"}
			if(combined[i]==11){combined[i]="k"}
			if(combined[i]==12){combined[i]="l"}
			if(combined[i]==13){combined[i]="m"}
			if(combined[i]==14){combined[i]="n"}
			if(combined[i]==15){combined[i]="o"}
			if(combined[i]==16){combined[i]="p"}
			if(combined[i]==17){combined[i]="q"}
			if(combined[i]==18){combined[i]="r"}
			if(combined[i]==19){combined[i]="s"}
			if(combined[i]==20){combined[i]="t"}
			if(combined[i]==21){combined[i]="u"}
			if(combined[i]==22){combined[i]="v"}
			if(combined[i]==23){combined[i]="w"}
			if(combined[i]==24){combined[i]="x"}
			if(combined[i]==25){combined[i]="y"}
			if(combined[i]==26){combined[i]="z"}
		}

	// Turning into string for niceness
	var combo = ""
		for(i=0;i<size;i++){
			combo+=combined[i]
		}
	document.writeln("<p>Your input is "+input+", your output is "+combo+", and the key is "+key+"</p>")
}

function decrypt (output,key){
	var size=output.length

	var outputA=output.split("");
	var keyA=key.split("");
	var outputB = [];
	var keyB = [];

	// Turning output into numbers
		for(i=0;i<size;i++){
			if(outputA[i]=="a"){outputB[i]=1}
			if(outputA[i]=="b"){outputB[i]=2}
			if(outputA[i]=="c"){outputB[i]=3}
			if(outputA[i]=="d"){outputB[i]=4}
			if(outputA[i]=="e"){outputB[i]=5}
			if(outputA[i]=="f"){outputB[i]=6}
			if(outputA[i]=="g"){outputB[i]=7}
			if(outputA[i]=="h"){outputB[i]=8}
			if(outputA[i]=="i"){outputB[i]=9}
			if(outputA[i]=="j"){outputB[i]=10}
			if(outputA[i]=="k"){outputB[i]=11}
			if(outputA[i]=="l"){outputB[i]=12}
			if(outputA[i]=="m"){outputB[i]=13}
			if(outputA[i]=="n"){outputB[i]=14}
			if(outputA[i]=="o"){outputB[i]=15}
			if(outputA[i]=="p"){outputB[i]=16}
			if(outputA[i]=="q"){outputB[i]=17}
			if(outputA[i]=="r"){outputB[i]=18}
			if(outputA[i]=="s"){outputB[i]=19}
			if(outputA[i]=="t"){outputB[i]=20}
			if(outputA[i]=="u"){outputB[i]=21}
			if(outputA[i]=="v"){outputB[i]=22}
			if(outputA[i]=="w"){outputB[i]=23}
			if(outputA[i]=="x"){outputB[i]=24}
			if(outputA[i]=="y"){outputB[i]=25}
			if(outputA[i]=="z"){outputB[i]=26}

			if(keyA[i]=="a"){keyB[i]=1}
			if(keyA[i]=="b"){keyB[i]=2}
			if(keyA[i]=="c"){keyB[i]=3}
			if(keyA[i]=="d"){keyB[i]=4}
			if(keyA[i]=="e"){keyB[i]=5}
			if(keyA[i]=="f"){keyB[i]=6}
			if(keyA[i]=="g"){keyB[i]=7}
			if(keyA[i]=="h"){keyB[i]=8}
			if(keyA[i]=="i"){keyB[i]=9}
			if(keyA[i]=="j"){keyB[i]=10}
			if(keyA[i]=="k"){keyB[i]=11}
			if(keyA[i]=="l"){keyB[i]=12}
			if(keyA[i]=="m"){keyB[i]=13}
			if(keyA[i]=="n"){keyB[i]=14}
			if(keyA[i]=="o"){keyB[i]=15}
			if(keyA[i]=="p"){keyB[i]=16}
			if(keyA[i]=="q"){keyB[i]=17}
			if(keyA[i]=="r"){keyB[i]=18}
			if(keyA[i]=="s"){keyB[i]=19}
			if(keyA[i]=="t"){keyB[i]=20}
			if(keyA[i]=="u"){keyB[i]=21}
			if(keyA[i]=="v"){keyB[i]=22}
			if(keyA[i]=="w"){keyB[i]=23}
			if(keyA[i]=="x"){keyB[i]=24}
			if(keyA[i]=="y"){keyB[i]=25}
			if(keyA[i]=="z"){keyB[i]=26}
		}

	// Add 26 to the ouput
		for(i=0;i<size;i++){
			outputB[i]+=26
		}

	var input = [];
	// Find final
		for(i=0;i<size;i++){
			input[i]=outputB[i]-keyB[i];
			if(input[i]>26){input[i]-=26}
		}

	var inputA = [];
	// Tranform into letters
		for(i=0;i<size;i++){
			if(input[i]==1){inputA[i]="a"}
			if(input[i]==2){inputA[i]="b"}
			if(input[i]==3){inputA[i]="c"}
			if(input[i]==4){inputA[i]="d"}
			if(input[i]==5){inputA[i]="e"}
			if(input[i]==6){inputA[i]="f"}
			if(input[i]==7){inputA[i]="g"}
			if(input[i]==8){inputA[i]="h"}
			if(input[i]==9){inputA[i]="i"}
			if(input[i]==10){inputA[i]="j"}
			if(input[i]==11){inputA[i]="k"}
			if(input[i]==12){inputA[i]="l"}
			if(input[i]==13){inputA[i]="m"}
			if(input[i]==14){inputA[i]="n"}
			if(input[i]==15){inputA[i]="o"}
			if(input[i]==16){inputA[i]="p"}
			if(input[i]==17){inputA[i]="q"}
			if(input[i]==18){inputA[i]="r"}
			if(input[i]==19){inputA[i]="s"}
			if(input[i]==20){inputA[i]="t"}
			if(input[i]==21){inputA[i]="u"}
			if(input[i]==22){inputA[i]="v"}
			if(input[i]==23){inputA[i]="w"}
			if(input[i]==24){inputA[i]="x"}
			if(input[i]==25){inputA[i]="y"}
			if(input[i]==26){inputA[i]="z"}
		}

	var message = ""
	// Change to string
		for(i=0;i<size;i++){
			message+=inputA[i]
		}
	document.writeln("<p>Your original message was "+message+"</p>")
}