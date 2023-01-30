class ChangeTasksNameLimit30 < ActiveRecord::Migration[5.2]
  def up
    change_column :tasks, :name, :string, limit:30
  end

  def end
    change_column :tasks, :name, :string
  end
end
