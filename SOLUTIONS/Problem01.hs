-- Output:
--  [(5,"Pan Pan"),(3,"Kaka"),(13,"Hodori"),(20,"Atung"),(28,"Bhin Bhin")]

main :: IO()
main = do 
  putStrLn $ show [(x, select x) | x <- [5, 3, 13, 20, 28]]
  where select :: Int -> [Char]
        select x
            | x <= 0  = error "index out of bounds"
            | otherwise = d !! idx
          where d   = ["Bhin Bhin", "Atung", "Kaka", "Hodori", "Pan Pan", "Appu", "Lulu", "Orry", "Mei Mei"]
                idx = (x-1) `mod` (length d)
