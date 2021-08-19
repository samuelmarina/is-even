#include <bits/stdc++.h>
using namespace std;
int main()
{
    ofstream file("index.js", ios::app);
    file << "function isEven(number) {" << endl;
    file << "if (number === 1 )return true;" << endl; 
    cout << "enter the no. of conditions: " ;
    int n;
    cin >> n;
    string k;
    for (int i = 0; i <= n; i++) {
        if (i % 2 == 0)
            k = " )return true;";
        else
            k = " )return false;";
        file << "else if (number ===" << i << k << endl;
    }
    file << "}" << endl;
    file.close();
    return 0;
}
