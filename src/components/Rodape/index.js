import './Rodape.css'

const Rodape = () => {
   return (
      <div className='rodape'>
         <div className='icones'>
            <ul>
               <li>
                  <a href='/'>
                     <img src='/imagens/fb.png' alt='' />
                  </a>
               </li>
               <li>
                  <a href='/'>
                     <img src='/imagens/tw.png' alt='' />
                  </a>
               </li>
               <li>
                  <a href='/'>
                     <img src='/imagens/ig.png' alt='' />
                  </a>
               </li>
            </ul>
         </div>

         <div className='logo'>
            <img src='/imagens/logo.png' alt='' />
         </div>

         <div className='direitos'>
            <p>Desenvolvido por Alura</p>
         </div>
      </div>
   )
}

export default Rodape