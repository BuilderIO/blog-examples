import { Accordion } from "./components/Accordion";
import styles from "./page.module.css";

export default function GitHubExample() {
  return (
    <div className={styles.container}>
      <Accordion
        entries={[
          {
            title: "Automate any workflow",
            content: "Optimize your process with simple and secured CI/CD.",
            img: "/accordion/01.webp",
          },
          {
            title: "Get up and running in seconds",
            content:
              "Start building instantly with a comprehensive dev environment in the cloud.",
            img: "/accordion/02.webp",
          },
          {
            title: "Build on the go",
            content:
              "Manage projects and chat with GitHub Copilot from anywhere.",
            img: "/accordion/03.webp",
          },
          {
            title: "Integrate the tools you love",
            content:
              "Sync with 17,000+ integrations and a growing library of Copilot Extensions.",
            img: "/accordion/04.webp",
          },
          {
            title: "Share ideas and ask questions",
            content:
              "Create space for open-ended conversations alongside your project.",
            img: "/accordion/05.webp",
          },
        ]}
      />
    </div>
  );
}
