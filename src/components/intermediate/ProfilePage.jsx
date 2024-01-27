import AllPosts from "./AllPosts";
import Heading from "./Heading";
import Post from "./Post";
import Section from "./Section";
import "./style.css";

export default function ProfilePage() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post title="Hello traveller!" body="Read about my adventures." />
      <AllPosts />
    </Section>
  );
}
