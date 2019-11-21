using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace LeilaoOnline.Core.Tests
{
   public class lanceCtor
    {
        [Fact]
        public void LancaArgumentExceptionDadoValorNegativo()
        {
            //Arranjre
            var negativo = -100;

            //Assert
            Assert.Throws<System.ArgumentException>(()=> new Lance(null,negativo));
        }
    }
}
