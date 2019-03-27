import Type from "./types";

export function showMessage(message) {
  return (dispatch) => {
  		setTimeout(()=>{
  			dispatch({
					type: Type.HIDE_MESSAGE
				})
  		}, 3000);
  		
    	dispatch({
				type: Type.SHOW_MESSAGE,
				message: message,
				showMessage: true
			});

  }
}
