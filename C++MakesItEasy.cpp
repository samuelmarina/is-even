#include <bits/stdc++.h>
using namespace std;
int main()
{
    ofstream file("index.js", ios::app);
    file << "function isEven(number) {" << endl;
    file << "if (number == 1 )return true;" << endl;
    cout << "enter the no. of conditions: ";
    file << "else if (number == \"even\" || number == \"Even\" || number == \"eVen\" || number == \"evEn\" || number == \"eveN\" || number == \"EVen\" || number == \"EvEn\" || number == \"EveN\" || number == \"eVEn\" || number == \"eVeN\" || number == \"evEN\" || number == \"eVEN\" || number == \"EvEN\" || number == \"EVeN\" || number == \"EVEn\" || number == \"EVEN\") return true;";
    int n;
    cin >> n;
    string k;
    for (int i = 2; i <= n; i++)
    {
        if (i % 2 == 0)
            k = " )return true;";
        else
            k = " )return false;";
        file << endl << "\telse if (number ==" << i << k << endl;
    }

    file << "}" << endl;
    file.close();
    return 0;
}
