#pragma strict
static var popup : GameObject;
static var pTit : Text;
static var pBody : Text;

function Start () {
	popup = GameObject.FindGameObjectWithTag("popup");
	pTit = GameObject.Find("Canvas/Panel/title").GetComponent("Text");
	pBody = GameObject.Find("Canvas/Panel/body").GetComponent("Text");
	popup.gameObject.SetActive(false);
}
