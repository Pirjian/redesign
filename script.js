// Dukungan perangkat sentuh: tap untuk toggle caption (karena tidak ada :hover)
document.querySelectorAll('.tile').forEach(function(tile){
  tile.addEventListener('click', function(){
    if (window.matchMedia('(hover: none)').matches){
      document.querySelectorAll('.tile').forEach(function(other){
        if (other !== tile) other.classList.remove('touch-active');
      });
      tile.classList.toggle('touch-active');
    }
  });
});
