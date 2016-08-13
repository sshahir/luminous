#pragma strict
import UnityEngine.SceneManagement;

function GoTo(str : String){
	if(str == "exit"){
		Application.Quit();
	}
	else{
		SceneManager.LoadScene("Scenes/"+str,LoadSceneMode.Single);
	}
}