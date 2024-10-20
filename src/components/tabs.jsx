function Tabs({ tabs, activeTab, onTabChange }) {
    return (
      <div className="flex flex-row bg-zinc-700 rounded-full overflow-hidden">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="w-full text-lg"
            style={{
              padding: "6px 6px",
              cursor: "pointer",
              border: "none",
              textTransform:'capitalize',
              backgroundColor: activeTab === tab.id ? "var(--colors-brand-primary-500)" : "transparent",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  }
  
  export default Tabs;
  