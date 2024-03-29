import styled from "styled-components";

export const ShareRecipeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 3px;
  height: 100vh;

  @media (max-width: 1160px) {
    height: unset;
    flex-direction: column;
  }
`

export const ShareRecipeForm = styled.div`
  width: 50%;
  padding: 30px;

  @media (max-width: 1160px) {
    width: unset;
    padding: 10px;
  }
`

export const ShareRecipeFormTitle = styled.div`
  margin-bottom: 15px;
  & h2 {
    font-weight: 100;
  }
`

export const SubmitButtonWrapper = styled.div`
  width: 150px;

  @media (max-width: 1160px) {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
  }
`

export const SubmitFormButton = styled.button`
  width: 100%;
  margin-top: 20px;  
  padding: 10px 0px;
  font-size: 18px;
  color: #fff;
  background-color: #f78154;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1160px) {
    align-items: start;
    flex-direction: column;
    margin-bottom: 20px;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1160px) {
    width: -webkit-fill-available;
    margin-bottom: 5px;

    & input {
      width: 100%;
      margin-bottom: 0px;
    }
  }
`

export const RecipeImageInput = styled.input`
  margin-bottom: ${({ marginBottom}) => marginBottom};
  padding: ${({ padding }) => padding};
`

export const ShareInput = styled.input`
  margin-bottom: 15px;
  padding: 15px 5px;
  border: 1px solid #9b9b9b;
  border-radius: 5px;
  background-color: #f7f7f7;
  width: 350px;
  height: 30px;
`

export const AddButtonWrapper = styled.div`
  height: 30px;
  margin-left: 10px;

  @media (max-width: 1160px) {
    margin-left: 0px;
    width: -webkit-fill-available;
  }
`

export const AddButton = styled.button`
  background-color: ${({ bg }) => bg};
  width: 165px;
  height: 100%;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer; 

  &:hover {
    background-color: ${({ bgHover }) => bgHover}
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`

export const ShareRecipeInfoContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  padding: 30px;
  overflow-y: scroll;
  direction: rtl;

  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }
 
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #f0f0f0; 
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #a3a3a3; 
  }

  @media (max-width: 1160px) {
    position: static;
    width: unset;
    height: unset;
    padding: 10px 10px 30px 10px;
    overflow-y: unset;
    direction: unset;
  }
`

export const RecipeInfoTitle = styled.div`
  font-size: 18px;
  padding: 5px 0 20px 0;
  margin: 5px 5px 15px 5px;
  border-bottom: 1px solid #ebe7e7;
  direction: ltr;
`

export const PrepAndServingsInfoTitle = styled(RecipeInfoTitle)`
  display: flex;
  align-items: baseline;
  border: ${({border}) => border};

  p {
    margin-left: 15px;
  }
`

export const RecipeFieldTitle = styled.h3`
  background-color: ${({ bg }) => bg};
  color: #fff;
  font-weight: 500;
  width: fit-content;
  padding: 5px 15px;
  border-radius: 20px;
`

const ItemsListStyle = [`
  padding: 20px 0 0 25px;
`]

export const UlItemList = styled.ul(ItemsListStyle)
export const OlItemList = styled.ol(ItemsListStyle)

export const RecipeImageWrapper = styled.div`
  padding: 20px 0px 0px 5px;
  width: 400px;
  height: 300px;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }

  @media (max-width: 620px) {
    padding: 20px 0px 0px 0px;
    width: unset;
  }
`

export const RecipeNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 20px 0px 0px 5px;
`

export const RecipeItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 15px;

  li {
    word-break: break-word;
    padding-right: 15px;
  }
`

export const EditOrDelete = styled.div`
  display: flex;
`

export const EditMode = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  padding: 25px 35px;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  box-shadow: 15px 10px 60px -1px rgb(0 0 0 / 15%);

  @media (max-width: 720px) {
    top: 6%;
    padding: 25px 10px;
    width: 100vw;
  }
`

export const EditModeItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 720px) {
    flex-direction: column;
    width: 100%;
  }
`

export const ItemInput = styled.div`
  width: 400px;
  margin-right: 10px;

  & input {
    width: 100%;
    border: 1px solid #b5b5b5;
    border-radius: 3px;
    padding: 3px;
    font-size: 18px;
  }

  @media (max-width: 720px) {
    width: inherit;
    margin-right: 0px;
  }
`

export const EditButton = styled.div`
  & button {
    padding: 8px 20px;
    border: none;
    border-radius: 3px;
    background-color: #2c2c2c;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #3a3a3a;
    }
  }

  @media (max-width: 720px) {
    width: -webkit-fill-available;
    margin-top: 5px;
    & button {
      width: inherit;
    }
  }
`

export const CloseEditButton = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  @media (max-width: 720px) {
    top: -2px;
    right: 5px;
  }
`

export const UpdateRecipeContainer = styled.div`
  padding: 30px 90px;
  @media (max-width: 620px) {
    padding: 30px 0px;
  }
`

export const ChooseAndUpdateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 50px;
`

export const UpdateButtonWrapper = styled.div`
  & button {
    padding: 15px 20px;
    border: none;
    border-radius: 3px;
    background-color: #f78154;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #f16f3b;
    }
  }

  @media (max-width: 775px) {
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);

    & button {
      padding: 15px 70px;
    }
  }
`

export const TitleAndAddMore = styled.div`
  display: flex;
  width: 180px;
  align-items: center;
  justify-content: space-between;
`

export const UpAndDownNumberWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 5px 0 20px 0;
  margin: 5px 5px 15px 5px;
  border-bottom: 1px solid #ebe7e7;
`

export const UpAndDownIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const AddMoreItem = styled.div`
  display: flex;
  align-items: flex-end;
  position: fixed;
  top: 12%;
  left: 50%;
  transform: translate(-50%);
  background-color: #fff;
  padding: 20px 35px;
  border: 1px solid #f1f1f1;
  -webkit-box-shadow: 15px 10px 60px -1px rgb(0 0 0 / 15%); 
  box-shadow: 15px 10px 60px -1px rgb(0 0 0 / 15%);

  @media (max-width: 720px) {
    align-items: unset;
    flex-direction: column;
    top: 6%;
    padding: 20px 10px;
    width: 100vw;
  }
`

export const TitleAndInputAddMoreWrapper = styled.div`
  & h4 {
    color: #646464;
    padding-bottom: 5px;
  }

  & input {
    width: 400px;
    height: 25px;
    border: 1px solid #b5b5b5;
    border-radius: 3px;
    padding: 5px;
    font-size: 18px;
  }

  @media (max-width: 720px) {
    width: 100%;
    & input {
      width: inherit;
    }
  }
`

export const AddOrCancelWrapper = styled.div`
  display: flex;
  margin-left: 10px;

  @media (max-width: 720px) {
    margin-top: 10px;
    margin-left: 0px;
  }
`