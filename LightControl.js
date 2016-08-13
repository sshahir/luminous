#pragma strict
import UnityEngine.UI;

var life : int = 3;
var speed : float = 50;
static var struckCount : int  = 0;
static var stars : int = 0;
var sname : String;


function Start () {
	GetComponent.<Rigidbody2D>().AddForce(transform.right * speed);
	var scene : Scene = SceneManagement.SceneManager.GetActiveScene();
	sname = scene.name;
}


function OnCollisionEnter2D(colInfo : Collision2D){
	
	if(colInfo.collider.tag == "source"){
		Destroy(transform.gameObject);
		contr.pTit.text="Failed";
		contr.pBody.text="Hit the source\nNo Stars";
		contr.popup.SetActive(true);
		struckCount = 0;
	}
	else if(colInfo.collider.name == "lightSink"){
		GameManager.sinkcount++;

		Destroy(colInfo.collider.gameObject);
		Destroy(transform.gameObject);
		if(struckCount == 1){
			stars = 3;
		}
		else if(struckCount == 2){
			stars = 2;
		}
		else if(struckCount == 3){
			stars = 1;
		}
		if(GameManager.sinkcount == 2 && sname == "level3"){
		contr.pTit.text="Congratulation";
		contr.pBody.text="Completed Level\nStars : "+stars;
		contr.popup.SetActive(true);
		struckCount = 0;
		}
		if(sname != "level3"){
			contr.pTit.text="Congratulation";
			contr.pBody.text="Completed Level\nStars : "+stars;
			contr.popup.SetActive(true);
			struckCount = 0;
		}
		if(sname == "level3"){
			clickonemit.displayEmit();
		}
	}
	else if(colInfo.collider.name == "lightSink2"){
		GameManager.sinkcount++;

		Destroy(colInfo.collider.gameObject);
		Destroy(transform.gameObject);
		if(struckCount == 1){
			stars = 3;
		}
		else if(struckCount == 2){
			stars = 2;
		}
		else if(struckCount == 3){
			stars = 1;
		}
		if(GameManager.sinkcount == 2 && sname == "level3"){
		contr.pTit.text="Congratulation";
		contr.pBody.text="Completed Level\nStars : "+stars;
		contr.popup.SetActive(true);
		struckCount = 0;
		}
		clickonemit.displayEmit();
	}
	else if(struckCount > 3){
		Destroy(transform.gameObject);
		contr.pTit.text="Failed";
		contr.pBody.text="Reflected more than 3 times !!\nNo Stars";
		contr.popup.SetActive(true);
		struckCount = 0;
	}
	else{
		struckCount++;
	}

}
