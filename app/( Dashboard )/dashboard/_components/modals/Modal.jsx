export default function Modal({children}) {
  return (
    <section 
    style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
    
    }}
    >
        <div
        style={{
            position: "relative",
            padding: "1rem",
            backgroundColor: "white",
            borderRadius: "5px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
            zIndex: 1000,
        }}
        >
            {children}
        </div>

    </section>
  )
}
