export default function AboutPage() {
  return (
    <article className="stack">
      <h1>About</h1>
      <p>Newtonian Cloud is verifiable, auditable storage.</p>
      <p>Files uploaded to the Newtonian Cloud are backed by the on-chain attestations of operators on
          the <a href="https://docs.newt.foundation/developers/overview/about">Newton Protocol</a>.
          The set of all files on the Newtonian Cloud contributes to the root of a <a href="https://docs.rs/jmt/latest/jmt/">Jellyfish Merkle Tree</a> to which
          these operators attest.</p>
          <h2>For Business</h2>
          <p>Newtonian Cloud gives compliance teams a cryptographic proof that a document existed in a specific state at a specific time, independently and trustlessly verifiable by any party. This is immediately beneficial to any regulated industry requiring hard guarantees for internal documents and external agreements. The Newtonian Cloud is <em>auditable</em></p>
          <h2>For Individuals</h2>
          <p>Newtonian Cloud offers continuously verified storage. The backing storage is periodically sampled and challenged to produce the hash of that file by the Newton Operator set. This process produces externally verifiable receipts that your files are always live and unaltered. The Newtonian Cloud is <em>verifiable</em>.</p>
    </article>
  );
}
