import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}) {
    return(
<>
<li>{marca} - {ano_lancamento}</li>
<p>Teste</p>
</>
    )
}

Item.prototype = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}
Item.defaultProps = {
    ano_lancamento: 0,
    marca: 'Faltou a marca ',
}
export default Item

