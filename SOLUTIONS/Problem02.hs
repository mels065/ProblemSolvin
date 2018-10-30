import Data.Char

-- Determines whether a string is isolated to one side of the keyboard when typed
-- For every character that is on the left side of the keyboard, a counter increments by one
-- If the character is on the right side, it decrements by one.
-- It is considered isolated if the absolute value of the counter is equal to the length of the string.

-- Output:
--  [("starwars",True),("lampung",False),("secret",True),("ilmu",True),("pony",True)]

-- TestCase:
-- #--------------------------#
-- | Case | Input    | Output | 
-- #--------------------------#
-- | #01  | starwars | true   |
-- | #02  | lampung  | false  |
-- | #03  | secret   | true   |
-- | #04  | ilmu     | true   |
-- | #05  | pony     | true   |
-- #--------------------------#

main = putStrLn $ show ([(x, isolated x) | x <- ["starwars", "lampung", "secret", "ilmu", "pony"]])
  where isolated :: String -> Bool
        isolated  x = abs ((sum . (map (\y -> if y `elem` leftHand then 1 else if y `elem` rightHand then -1 else 0))) x) == length x
          where leftHand    = ['1', '2', '3', '4', '5','q', 'w', 'e', 'r', 't','a', 's', 'd', 'f', 'g','z', 'x', 'c', 'v', 'b']
                rightHand   = [x | x <- (['a' .. 'z'] ++ ['0' .. '9']), not (x `elem` leftHand) ]
