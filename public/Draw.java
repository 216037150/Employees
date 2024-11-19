import javax.swing.*;
public class Draw {
  public static void main(String[] args) {
    var name = JOptionPane.showInputDialog("What is your name?");
    var output = name + " is such a nice name!";
    JOptionPane.showMessageDialog(null, output);
  }
}
