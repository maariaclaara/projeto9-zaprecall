export default function ExemploProps() {


    const handleClick = () => {
      handleClick("outro estado")
    }
  
  
    return (
      <ContainerCards selecionada = "selecionada" onClick={handleClick}>
      </ContainerCards>
    )
  };
  
  const ContainerCards = styled.div `
      height: 804px;
      width: 100%;
      background-color: ${(props) => props.selecionada === "selecionada" ? "green" : "gray"};
      margin-top: 153px;
  `;