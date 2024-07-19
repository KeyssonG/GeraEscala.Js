
-- Criar tabela de usuários
CREATE TABLE users (
	id SERIAL PRIMARY KEY, 
	email VARCHAR(255) UNIQUE NOT NULL, 
	password VARCHAR(255) NOT NULL,
	create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criar tabela de funcionários
CREATE TABLE employees (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(100) NOT NULL,
	last_name VARCHAR(100) NOT NULL,
	position VARCHAR(100),
	create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criar tabela de escalas de trabalho
CREATE TABLE schedules (
	id SERIAL PRIMARY KEY,
	employee_id INTEGER NOT NULL REFERENCES employees(id),
	shift_start TIMESTAMP NOT NULL, 
	shift_end TIMESTAMP NOT NULL,
	create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);