import Dashboard from "../../views/admin/Dashboard";
import { Produtos } from "../../views/admin/Produtos";
import { Usuarios } from "../../views/admin/Usuarios";

const MainContent = ({ selected }) => {
    const renderContent = () => {
        switch (selected) {
            case 'dashboard':
                return <Dashboard />;
            case 'produtos':
                return <Produtos />;
            case 'usuarios':
                return <Usuarios />;
            default:
                return (
                    <div className="text-white/50 text-sm">
                        Selecione uma seção válida no menu lateral.
                    </div>
                );
        }
    };

    return (
        <main className="flex min-h-screen w-full bg-black text-white px-10 py-8 relative overflow-hidden">
            {/* Círculo decorativo estilo glassmorphism */}
            <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl z-0" />
            <div className="absolute bottom-[-150px] left-[-150px] w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl z-0" />

            {/* Conteúdo principal */}
            <div className="relative z-10 w-full">
                {renderContent()}
            </div>
        </main>
    );
};

export default MainContent;
