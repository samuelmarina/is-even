file = <path to file>

with open(file, "a") as f:
    for i in range(size_of_your_mom):

        if i%2 == 0:
            b = "true;"
        else:
            b = "false;"

        f.write(f"    if (number === {i}) return {b}")
        f.write("\n")

# i used the stones to destroy the stones
