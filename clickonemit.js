#pragma strict

var pointTo : GameObject;
static var but : GameObject;
var txt : GameObject;



function Start(){
	pointTo = GameObject.FindGameObjectWithTag("spawn");
	but = GameObject.FindGameObjectWithTag("emit");
	txt = GameObject.FindGameObjectWithTag("playinfo");
}

function Emit(){

	but.SetActive(false);
	txt.SetActive(false);
	pointTo.gameObject.SendMessage("emit");
}

function PopupBut(str : String){
	but.SetActive(true);
	txt.SetActive(true);
	contr.popup.gameObject.SetActive(false);
	if(contr.pTit.text == "Congratulation"){
		SceneManager.LoadScene("Scenes/levels",LoadSceneMode.Single);
	}
}

static function displayEmit(){
	but.SetActive(true);
}