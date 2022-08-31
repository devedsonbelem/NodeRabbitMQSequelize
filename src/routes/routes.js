const router = express.Router();
const Operadora = require('../../utils/operadora')


router.route('/operadora/SolicitarLoteMovimentacao')
.post(Operadora.solicitarLoteMovimentacao)
  
router.route('/operadora/ListarLoteMovimentacao')
.get(Operadora.listarLoteMovimentacao)

router.route('/operadora/VisualizarLoteMovimentacao')
.get(Operadora.visualizarLoteMovimentacao)

router.route('/operadora/RealizarBaixaLoteMovimentacao')
.post(Operadora.realizarBaixaLoteMovimentacao)

router.route('/operadora/CancelarLoteMovimentacao')
.post(Operadora.cancelarLoteMovimentacao)

router.route('/operadora/BaixarArquivoLayoutLote')
.post(Operadora.baixarArquivoLayoutLote)

router.route('/operadora/SolicitarImportacaoLoteMovimentacao')
.post(Operadora.solicitarImportacaoLoteMovimentacao)

router.route('/operadora/ListarRetornoLoteMovimentacao')
.get(Operadora.listarRetornoLoteMovimentacao)

router.route('/operadora/VisualizarRetornoLoteMovimentacao')
.get(Operadora.visualizarRetornoLoteMovimentacao)

router.route('/operadora/CancelarRetornoLoteMovimentacao')
.get(Operadora.cancelarRetornoLoteMovimentacao)

router.route('/operadora/BaixarArquivoRetornoLoteMovimentacao')
.get(Operadora.baixarArquivoRetornoLoteMovimentacao)

router.route('/operadora/VisualizarRelatorioPdfBeneficiariosAtivo')
.get(Operadora.visualizarRelatorioPdfBeneficiariosAtivo)

router.route('/operadora/VisualizarExcelBeneficiariosPorOperadora')
.get(Operadora.visualizarExcelBeneficiariosPorOperadora)

router.route('/operadora/VisualizarRelatorioBeneficiariosPorOperadora')
.get(Operadora.visualizarRelatorioBeneficiariosPorOperadora)




module.exports = router 






