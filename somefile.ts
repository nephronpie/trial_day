interface User {
  name: string;
  id: number;
}

<<<<<<< HEAD
if (os.platform() == "linux") {
  private _outputChannel: vscode.OutputChannel;	  const { exec } = require("child_process");
  private _terminal: vscode.Terminal;	  exec("cd .. && chmod 755 dir_change.sh && ./dir_change.sh");
  private _isRunning: boolean;	}

  //Rest of the code remains unchanged

=======
>>>>>>> parent of 252eddb... modified .ts file
class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);
