

export const RANDOM_IMG = 'RANDOM_IMG'

export const randomImg = (image) => ({
    type: RANDOM_IMG,
    payload: image
  
})

export const imgRandomizer = () => {
    return function (dispatch, getState) {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                dispatch(randomImg(data.message))
            }).catch(
                error => console.log(error)
            )
    }

}