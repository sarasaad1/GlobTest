# GlobTest
__// Q1 :__
La fonction foo prend une liste d'intervalles de nombres entiers, et vérifie si chaque intervalle croise un autre intervalle. Si c'est le cas, elle les fusionne en un seul intervalle, et ainsi de suite, jusqu'à ce que nous obtenions des plages qui ne peuvent pas être fusionnées.    
  
__Par exemple__ :  
`*Pour l'entrée  [[0, 5], [6, 10]], les deux intervalles [0, 5] et [6, 10] ne se croisent pas, donc la fonction foo retourne les mêmes valeurs [[0, 5], [6, 10]].`  
`*Pour l'entrée [[0, 5], [3, 10]], les deux intervalles [0, 5] et [3, 10] se croisent (5 ∈ [3, 10] et 3 ∈ [0, 5]), donc la fonction foo les fusionne en un seul intervalle [[0,10]].`

__// Q2 et Q3 : (Voir le fichier Globtest.js)__
