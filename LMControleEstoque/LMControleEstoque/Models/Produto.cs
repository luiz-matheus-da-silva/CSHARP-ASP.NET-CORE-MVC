namespace LMControleEstoque.Models
{
    public class Produto
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public int QuantidadeEstoque { get; set; }
        public decimal Preco { get; set; }
        public int EstoqueMinimo { get; set; }
        public DateTime DataUltimaAtualizacao { get; set; } = DateTime.Now;
    }

}
