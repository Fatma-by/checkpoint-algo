VAR

   nbv,nbw,nbc= INTEGER ;

   sentc= STRING ;

BEGIN

  nbc= 0 ;

  nbw= 1 ;

  nbv= 0;

  write("type the sentence")

  read(sentc)

REPEAT

   

   if (sentc[nbc]=" ") then

       nbw=nbw+1 ;

   END_IF

  if (sentc[nbc] in ["a","e","u","i","o","y"]) then

   nbv= nbv +1 ;

   END_IF

   nbc = nbc+1 ;

until (sentc[nbc]=".")

write( "le nombre de caractere est ",nbc+1 )

write (" le nombre de mot est ",nbw)

write (" le nombre de voyelle est ",nbv)

