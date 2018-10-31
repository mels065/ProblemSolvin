-- Output:
-- INPUT   OUTPUT
-- 5       "Pan Pan"
-- 3       "Kaka"
-- 13      "Hodori"
-- 20      "Atung"
-- 28      "Bhin Bhin"
-- ----------------
-- INPUT   OUTPUT
-- 5       "Haha"
-- 3       "Huhu"
-- 13      "Haha"
-- 20      "Hoho"
-- 26      "Hihi"

-- Expected results
-- TestCase01:
-- #--------------------------#
-- | Case | Input | Output    |
-- #--------------------------#
-- | #01  | 5     | Pan Pan   |
-- | #02  | 3     | Kaka      |
-- | #03  | 13    | Hodori    |
-- | #04  | 20    | Atung     |
-- | #05  | 28    | Bhin Bhin |
-- #--------------------------#

-- TestCase02
-- #-----------------------#
-- | Case | Input | Output |
-- #-----------------------#
-- | #01  | 5     | Haha   |
-- | #02  | 3     | Huhu   |
-- | #03  | 13    | Haha   |
-- | #04  | 20    | Hoho   |
-- | #05  | 26    | Hihi   |
-- #-----------------------#

main :: IO()
main = do
  -- Create cyclical lists
  let test1 = cycle ["Bhin Bhin", "Atung", "Kaka", "Hodori", "Pan Pan", "Appu", "Lulu", "Orry", "Mei Mei"]
      test2 = cycle ["Haha", "Hihi", "Huhu", "Hoho"]

  formatOutput $ testCase test1 [5, 3, 13, 20, 28]
  putStrLn $ replicate 16 '-'
  formatOutput $ testCase test2 [5, 3, 13, 20, 26]
  
  where
    formatOutput :: (Num a, Show a) => [(a, String)] -> IO()
    formatOutput [] = return ()
    formatOutput d = do
      putStrLn "INPUT\tOUTPUT"
      fn d
      where fn [] = return ()
            fn ((x,y):xs) = do
              putStrLn $ (show x) ++ "\t" ++ (show y)
              fn xs

    testCase :: [String] -> [Int] -> [(Int, String)]
    testCase x y = [(t, x !! (t-1)) | t <- y]
