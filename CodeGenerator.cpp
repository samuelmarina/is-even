/* C++ program to print a given number in words.
The program handles till 9 digits numbers and
can be easily extended to 20 digit number */
#include <iostream>
#include <bits/stdc++.h>
using namespace std;

// strings at index 0 is not used, it is to make array
// indexing simple
string one[] = {"", "one ", "two ", "three ", "four ",
                "five ", "six ", "seven ", "eight ",
                "nine ", "ten ", "eleven ", "twelve ",
                "thirteen ", "fourteen ", "fifteen ",
                "sixteen ", "seventeen ", "eighteen ",
                "nineteen "};

// strings at index 0 and 1 are not used, they is to
// make array indexing simple
string ten[] = {"", "", "twenty ", "thirty ", "forty ",
                "fifty ", "sixty ", "seventy-", "eighty ",
                "ninety "};

// n is 1- or 2-digit number
string numToWords(int n, string s)
{
    string str = "";
    // if n is more than 19, divide it
    if (n > 19)
        str += ten[n / 10] + one[n % 10];
    else
        str += one[n];

    // if n is non-zero
    if (n)
        str += s;

    return str;
}

// Function to print a given number in words
string convertToWords(long n)
{
    // stores word representation of given number n
    string out;

    // handles digits at ten millions and hundred
    // millions places (if any)
    out += numToWords((n / 10000000), "crore ");

    // handles digits at hundred thousands and one
    // millions places (if any)
    out += numToWords(((n / 100000) % 100), "hundred ");

    // handles digits at thousands and tens thousands
    // places (if any)
    out += numToWords(((n / 1000) % 100), "thousand ");

    // handles digit at hundreds places (if any)
    out += numToWords(((n / 100) % 10), "hundred ");

    if (n > 100 && n % 100)
        out += "and ";

    // handles digits at ones and tens places (if any)
    out += numToWords((n % 100), "");

    return out;
}

string cap(string a)
{
    for (int i = 0; i < a.length(); ++i)
    {
        if (i == 0)
        {
            if (islower(a[i]))
                a[i] = toupper(a[i]);
        }
        else
        {
            if (a[i] != ' ')
            {
                if (isupper(a[i]))
                    a[i] = tolower(a[i]);
            }
            else
            {
                i++;
                if (islower(a[i]))
                    a[i] = toupper(a[i]);
            }
        }
    }
    return a;
}

// Driver code
int main()
{
    // long handles upto 9 digit no
    // change to unsigned long long int to
    // handle more digit number

    // convert given number in words
    //enter current number and your desired number to generate code

    for (long long int i = 376001; i <= 376500; i++)
    {
        string temp;
        string num = to_string(i);
        if (i % 2 == 0)
        {
            temp = "true";
        }
        else
        {
            temp = "false";
        }
        string word = convertToWords(i);
        string up = word;
        transform(up.begin(), up.end(), up.begin(), ::toupper);
        string c = cap(word);
        cout << "else if (number === " << i << " || number ===  \"" << num << "\" || number === \"" << word << "\" || number === \"" << c << "\" || number === \"" << up << "\" ) return " << temp << ";" << endl;
    }
    return 0;
}
