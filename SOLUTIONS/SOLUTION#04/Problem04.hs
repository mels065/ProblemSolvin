-- #---------------------------#
-- | Case | Input | Output     |
-- #---------------------------#
-- | #01  | 1     | +          |
-- | #02  | 5     | +-*/+      |
-- | #03  | 7     | +-*/+-*    |
-- | #04  | 0     | :(         |
-- | #05  | 10    | +-*/+-*/+- |
-- #---------------------------#

-- Output:
-- 1       "+"
-- 5       "+-*/+"
-- 7       "+-*/+-*"
-- 0       :(
-- 10      "+-*/+-*/+-"

main :: IO ()
main = do
  loop [1, 5, 7, 0, 10]
  where 
    -- Create an infinite list of math operations
    operations = cycle "+-*/"
    -- Iterate over the test cases, printing their results
    loop :: [Int] -> IO () 
    loop []     = return ()
    loop (x:xs) = do
      -- Take a string of 'x' operations from the list
      -- If the value of 'x' is zero, print ":("
      putStrLn $ show x ++ "\t" ++ (if x == 0 then ":(" else show $ take x operations)
      loop xs
