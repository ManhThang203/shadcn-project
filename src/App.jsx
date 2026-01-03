import { Button } from "./components/ui/button";
import { useTheme } from "./hooks/useTheme";
import { Sun } from "lucide-react";
import { MoonStar } from "lucide-react";
import { MonitorCog } from "lucide-react";
function App() {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <div>
      <Button asChild>
        <a href="#!">Hello</a>
      </Button>

      <Button onClick={() => setTheme("light")}>
        <Sun />
      </Button>
      <Button onClick={() => setTheme("dark")}>
        <MoonStar />
      </Button>
      <Button onClick={() => setTheme("system")}>
        <MonitorCog />
      </Button>
    </div>
  );
}

export default App;
