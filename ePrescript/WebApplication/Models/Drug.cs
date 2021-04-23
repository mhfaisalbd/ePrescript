using System;

namespace WebApplication.Models
{
    public class Drug
    {
        public Guid Id { get; set; }
        public string BatchNo { get; set; }
        public string GenericName { get; set; }
        public string TradeName { get; set; }
        public string Unit { get; set; }
        public DrugType DrugType { get; set; }

    }
}