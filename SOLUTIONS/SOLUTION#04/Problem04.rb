def maths(n)

  operations = "+-*/"

  if n == 0
    puts ":("
  end

  retval = operations * (n / 4) + operations.slice(0, (n % 4))
  puts retval
end
